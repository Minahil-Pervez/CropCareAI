import tensorflow as tf
import numpy as np
from sklearn.metrics import classification_report, confusion_matrix

MODEL_PATH = r"models\cropcare_rice_model.keras"
VAL_DIR = r"rice_dataset\val"

IMAGE_SIZE = (224, 224)
BATCH_SIZE = 16

classes = [
    "Bacterial_Leaf_Blight",
    "Brown_Spot",
    "Healthy_Rice_Leaf",
    "Leaf_Blast",
    "Leaf_Scald",
    "Sheath_Blight"
]

print("Loading model...")

model = tf.keras.models.load_model(MODEL_PATH)

print("Loading validation dataset...")

val_dataset = tf.keras.utils.image_dataset_from_directory(
    VAL_DIR,
    image_size=IMAGE_SIZE,
    batch_size=BATCH_SIZE,
    label_mode="categorical",
    shuffle=False
)

print()
print("Evaluating model...")

loss, accuracy = model.evaluate(val_dataset, verbose=1)

print()
print("Validation Loss:", loss)
print("Validation Accuracy:", f"{accuracy * 100:.2f}%")

y_true = []
y_pred = []

for images, labels in val_dataset:

    predictions = model.predict(images, verbose=0)

    predicted_classes = np.argmax(predictions, axis=1)
    actual_classes = np.argmax(labels.numpy(), axis=1)

    y_pred.extend(predicted_classes)
    y_true.extend(actual_classes)

print()
print("Classification Report:")
print()

print(
    classification_report(
        y_true,
        y_pred,
        target_names=classes,
        digits=2
    )
)

print("Confusion Matrix:")
print()

print(
    confusion_matrix(
        y_true,
        y_pred
    )
)