import tensorflow as tf
import numpy as np
from PIL import Image

MODEL_PATH = r"models\cropcare_rice_model_v2.keras"

CLASS_NAMES = [
    "Bacterial_Leaf_Blight",
    "Brown_Spot",
    "Healthy_Rice_Leaf",
    "Leaf_Blast",
    "Leaf_Scald",
    "Sheath_Blight",
]

print("Loading model...")

model = tf.keras.models.load_model(MODEL_PATH)

print("Model loaded successfully!")

image_path = input("Enter full image path: ").strip().strip('"')

image = Image.open(image_path).convert("RGB")
image = image.resize((224, 224))

image_array = np.array(image, dtype=np.float32)

image_array = tf.keras.applications.mobilenet_v2.preprocess_input(
    image_array
)

image_array = np.expand_dims(image_array, axis=0)

predictions = model.predict(image_array, verbose=0)[0]

print()
print("All predictions:")
print()

for name, probability in zip(CLASS_NAMES, predictions):
    print(
        f"{name}: {float(probability * 100):.2f}%"
    )

predicted_index = int(np.argmax(predictions))

print()
print(
    "FINAL PREDICTION:",
    CLASS_NAMES[predicted_index]
)

print(
    "CONFIDENCE:",
    f"{float(predictions[predicted_index] * 100):.2f}%"
)