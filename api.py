import os
import io

import numpy as np
import tensorflow as tf
from PIL import Image
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

MODEL_PATH = r"models\cropcare_rice_model.keras"

CLASS_NAMES = [
    "Bacterial_Leaf_Blight",
    "Brown_Spot",
    "Healthy_Rice_Leaf",
    "Leaf_Blast",
    "Leaf_Scald",
    "Sheath_Blight",
]

app = FastAPI(title="CropCare AI Disease Detection API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("Loading CropCare AI model...")

model = tf.keras.models.load_model(MODEL_PATH)

print("Model loaded successfully!")


@app.get("/")
def home():
    return {
        "message": "CropCare AI API is running"
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    image_bytes = await file.read()

    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    image = image.resize((224, 224))

    image_array = np.array(image, dtype=np.float32)

    image_array = tf.keras.applications.mobilenet_v2.preprocess_input(
        image_array
    )

    image_array = np.expand_dims(image_array, axis=0)

    predictions = model.predict(image_array, verbose=0)[0]

    predicted_index = int(np.argmax(predictions))
    confidence = float(predictions[predicted_index] * 100)

    disease = CLASS_NAMES[predicted_index]

    print()
    print("Prediction:", disease)
    print("Confidence:", round(confidence, 2), "%")

    return {
        "disease": disease,
        "confidence": round(confidence, 2)
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000
    )