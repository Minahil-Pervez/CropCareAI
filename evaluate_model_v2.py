import tensorflow as tf
import numpy as np
from sklearn.metrics import classification_report, confusion_matrix

MODEL_PATH = r"models\cropcare_rice_model_v2.keras"
VAL_DIR = r"rice_dataset\val"

IMAGE_SIZE = (224, 224)
BATCH_SIZE = 16

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

class_names = val_dataset.class_names

print()
print("Classes:")
print(class_names)

y_true = []
y_pred = []

for images, labels in val_dataset:
    predictions = model.predict(images, verbose=0)

    y_true.extend(np.argmax(labels.numpy(), axis=1))
    y_pred.extend(np.argmax(predictions, axis=1))

print()
print("Classification Report")
print()

print(
    classification_report(
        y_true,
        y_pred,
        target_names=class_names
    )
)

print("Confusion Matrix")
print()

print(
    confusion_matrix(
        y_true,
        y_pred
    )
)