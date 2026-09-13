import os
import random
import tensorflow as tf
import numpy as np
from PIL import Image

MODEL_PATH = r"models\cropcare_rice_model.keras"
DATASET_PATH = r"rice_dataset\val"

CLASS_NAMES = [
    "Bacterial_Leaf_Blight",
    "Brown_Spot",
    "Healthy_Rice_Leaf",
    "Leaf_Blast",
    "Leaf_Scald",
    "Sheath_Blight",
]

model = tf.keras.models.load_model(MODEL_PATH)

print("\nMODEL TEST\n")

for class_name in CLASS_NAMES:

    folder = os.path.join(DATASET_PATH, class_name)

    files = [
        f for f in os.listdir(folder)
        if f.lower().endswith((".jpg", ".jpeg", ".png"))
    ]

    image_file = random.choice(files)
    image_path = os.path.join(folder, image_file)

    image = Image.open(image_path).convert("RGB")
    image = image.resize((224, 224))

    image_array = np.array(image, dtype=np.float32)

    image_array = tf.keras.applications.mobilenet_v2.preprocess_input(
        image_array
    )

    image_array = np.expand_dims(image_array, axis=0)

    prediction = model.predict(image_array, verbose=0)[0]

    index = int(np.argmax(prediction))

    print("Actual     :", class_name)
    print("Prediction :", CLASS_NAMES[index])
    print("Confidence :", f"{prediction[index] * 100:.2f}%")
    print()