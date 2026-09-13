import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import os


# Paths
TRAIN_DIR = r"D:\Documents\Java Work\CropCareAI_Model\rice_dataset\train"
VAL_DIR = r"D:\Documents\Java Work\CropCareAI_Model\rice_dataset\val"

MODEL_DIR = r"D:\Documents\Java Work\CropCareAI_Model\models"

os.makedirs(MODEL_DIR, exist_ok=True)


# Settings
IMAGE_SIZE = (224, 224)
BATCH_SIZE = 16
NUM_CLASSES = 6


print("TensorFlow version:", tf.__version__)

print("Loading training dataset...")


train_dataset = tf.keras.utils.image_dataset_from_directory(
    TRAIN_DIR,
    image_size=IMAGE_SIZE,
    batch_size=BATCH_SIZE,
    label_mode="categorical",
    shuffle=True,
    seed=42
)


print("Loading validation dataset...")


val_dataset = tf.keras.utils.image_dataset_from_directory(
    VAL_DIR,
    image_size=IMAGE_SIZE,
    batch_size=BATCH_SIZE,
    label_mode="categorical",
    shuffle=False
)


print()
print("Classes:")
print(train_dataset.class_names)


# Improve input pipeline
AUTOTUNE = tf.data.AUTOTUNE

train_dataset = train_dataset.prefetch(
    AUTOTUNE
)

val_dataset = val_dataset.prefetch(
    AUTOTUNE
)


# Data augmentation
data_augmentation = keras.Sequential([
    layers.RandomFlip("horizontal"),
    layers.RandomRotation(0.1),
    layers.RandomZoom(0.1),
])


# Load pretrained MobileNetV2
base_model = tf.keras.applications.MobileNetV2(
    input_shape=(224, 224, 3),
    include_top=False,
    weights="imagenet"
)


# Freeze pretrained layers
base_model.trainable = False


# Build model
inputs = keras.Input(
    shape=(224, 224, 3)
)


x = data_augmentation(inputs)

x = tf.keras.applications.mobilenet_v2.preprocess_input(x)

x = base_model(
    x,
    training=False
)

x = layers.GlobalAveragePooling2D()(x)

x = layers.Dropout(0.2)(x)

outputs = layers.Dense(
    NUM_CLASSES,
    activation="softmax"
)(x)


model = keras.Model(
    inputs,
    outputs
)


# Compile
model.compile(
    optimizer=keras.optimizers.Adam(
        learning_rate=0.001
    ),
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)


print()
print("Model summary:")
model.summary()


# Train
print()
print("Starting training...")


history = model.fit(
    train_dataset,
    validation_data=val_dataset,
    epochs=5
)


# Save model
model_path = os.path.join(
    MODEL_DIR,
    "cropcare_rice_model.keras"
)


model.save(model_path)


print()
print("Training complete!")
print()
print("Model saved to:")
print(model_path)