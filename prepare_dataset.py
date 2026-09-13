import os
import glob
import pandas as pd
from PIL import Image
from io import BytesIO
from sklearn.model_selection import train_test_split


SOURCE_DIR = r"D:\Documents\Java Work\CropCareAI_Model\dataset\rice\data"

OUTPUT_DIR = r"D:\Documents\Java Work\CropCareAI_Model\rice_dataset"


LABEL_NAMES = {
    0: "Bacterial_Leaf_Blight",
    1: "Brown_Spot",
    2: "Healthy_Rice_Leaf",
    3: "Leaf_Blast",
    4: "Leaf_Scald",
    5: "Sheath_Blight"
}


os.makedirs(OUTPUT_DIR, exist_ok=True)

print("Finding Parquet files...")

files = sorted(
    glob.glob(os.path.join(SOURCE_DIR, "*.parquet"))
)

print(f"Found {len(files)} Parquet files.")


dataframes = []

for file in files:
    print(f"Reading: {os.path.basename(file)}")

    df = pd.read_parquet(
        file,
        columns=["image", "label"]
    )

    dataframes.append(df)


data = pd.concat(
    dataframes,
    ignore_index=True
)


print()
print(f"Total images: {len(data)}")


train_data, val_data = train_test_split(
    data,
    test_size=0.20,
    random_state=42,
    stratify=data["label"]
)


print(f"Training images: {len(train_data)}")
print(f"Validation images: {len(val_data)}")


def save_images(dataframe, split_name):

    print()
    print(f"Saving {split_name} images...")

    for label, disease_name in LABEL_NAMES.items():

        folder = os.path.join(
            OUTPUT_DIR,
            split_name,
            disease_name
        )

        os.makedirs(
            folder,
            exist_ok=True
        )

    for position, (_, row) in enumerate(dataframe.iterrows(), start=1):

        label = int(row["label"])

        disease_name = LABEL_NAMES[label]

        folder = os.path.join(
            OUTPUT_DIR,
            split_name,
            disease_name
        )

        image_data = row["image"]

        if isinstance(image_data, dict):
            image_bytes = image_data["bytes"]
        else:
            image_bytes = image_data

        image = Image.open(
            BytesIO(image_bytes)
        ).convert("RGB")

        filename = f"{split_name}_{position}.jpg"

        output_path = os.path.join(
            folder,
            filename
        )

        image.save(
            output_path,
            "JPEG",
            quality=95
        )

        if position % 100 == 0:
            print(f"Processed {position} images")


save_images(train_data, "train")

save_images(val_data, "val")


print()
print("Dataset preparation complete!")
print()
print(f"Output folder: {OUTPUT_DIR}")