# CropCare AI

CropCare AI is an AI powered smart agriculture application designed to help farmers identify rice leaf diseases using computer vision.

## Problem

Farmers may have difficulty identifying crop diseases at an early stage. CropCare AI provides an AI based approach for identifying rice leaf diseases from leaf images.

## Solution

Farmers can select or capture a rice leaf image using the mobile application. The image is sent to a FastAPI backend, where a TensorFlow MobileNetV2 model analyzes the image and returns the predicted disease and confidence.

## Main Features

1. Rice leaf disease detection
2. Camera and gallery image selection
3. AI based disease prediction
4. AI assistant
5. Weather information
6. Scan history
7. Mobile application interface

## Current Rice Disease Classes

1. Bacterial Leaf Blight
2. Brown Spot
3. Healthy Rice Leaf
4. Leaf Blast
5. Leaf Scald
6. Sheath Blight

## Technology

Mobile application:
React Native
Expo
TypeScript

AI backend:
Python
FastAPI
TensorFlow
MobileNetV2

## Project Structure

CropCareAI contains the mobile application.

CropCareAI_Model contains the AI model and FastAPI backend.

## Running the Backend

Open the CropCareAI_Model folder.

Create a Python virtual environment and install the required packages:

pip install -r requirements.txt

Start the API:

python api.py

The API runs on port 8000.

## API

POST /predict

The endpoint accepts a rice leaf image and returns the predicted disease and confidence.

## Future Scope

Future development will expand CropCare AI to additional crops and disease classes. Planned features include pest detection, irrigation recommendations, fertilizer recommendations, and IoT based agricultural solutions.

## Project Status

CropCare AI is a working prototype developed for the Alibaba Cloud AI Hackathon Pakistan 2026.
