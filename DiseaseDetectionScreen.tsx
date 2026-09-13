/*import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

export default function DiseaseDetectionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.back}>‹</Text>

        <Text style={styles.title}>Disease Detection</Text>

        <View style={styles.empty} />
      </View>

      <View style={styles.content}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>🌿</Text>
        </View>

        <Text style={styles.heading}>
          Check your crop health
        </Text>

        <Text style={styles.description}>
          Take a photo of a crop leaf or choose an image from your gallery.
          CropCare AI will analyze it for possible diseases.
        </Text>

        <Pressable style={styles.cameraButton}>
          <Text style={styles.buttonText}>
            📷  Take a Photo
          </Text>
        </Pressable>

        <Pressable style={styles.galleryButton}>
          <Text style={styles.galleryText}>
            🖼️  Choose from Gallery
          </Text>
        </Pressable>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            💡 For better results
          </Text>

          <Text style={styles.infoText}>
            Use a clear photo of the affected leaf in good lighting.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAF7",
  },

  header: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  back: {
    fontSize: 36,
    color: "#17321D",
    width: 40,
  },

  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17321D",
  },

  empty: {
    width: 40,
  },

  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 45,
  },

  iconBox: {
    width: 90,
    height: 90,
    borderRadius: 28,
    backgroundColor: "#E4F2E7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  icon: {
    fontSize: 45,
  },

  heading: {
    fontSize: 25,
    fontWeight: "800",
    color: "#17321D",
    textAlign: "center",
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#718078",
    textAlign: "center",
    marginBottom: 30,
  },

  cameraButton: {
    width: "100%",
    backgroundColor: "#2E7D32",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  galleryButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9E5DB",
  },

  galleryText: {
    color: "#2E7D32",
    fontSize: 15,
    fontWeight: "700",
  },

  infoCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#E6EEE8",
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#17321D",
    marginBottom: 7,
  },

  infoText: {
    fontSize: 12,
    lineHeight: 19,
    color: "#718078",
  },
});
*/

/*import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function DiseaseDetectionScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Camera Permission",
        "Please allow camera access to take a crop photo."
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const chooseFromGallery = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Gallery Permission",
        "Please allow gallery access to choose a crop image."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.back}>‹</Text>

        <Text style={styles.title}>Disease Detection</Text>

        <View style={styles.empty} />
      </View>

      <View style={styles.content}>
        {selectedImage ? (
          <Image
            source={{ uri: selectedImage }}
            style={styles.preview}
          />
        ) : (
          <View style={styles.iconBox}>
            <Text style={styles.icon}>🌿</Text>
          </View>
        )}

        <Text style={styles.heading}>
          {selectedImage ? "Crop image selected" : "Check your crop health"}
        </Text>

        <Text style={styles.description}>
          {selectedImage
            ? "Your crop image is ready. We can analyze it for possible diseases."
            : "Take a photo of a crop leaf or choose an image from your gallery. CropCare AI will analyze it for possible diseases."}
        </Text>

        <Pressable
          style={styles.cameraButton}
          onPress={takePhoto}
        >
          <Text style={styles.buttonText}>
            📷  Take a Photo
          </Text>
        </Pressable>

        <Pressable
          style={styles.galleryButton}
          onPress={chooseFromGallery}
        >
          <Text style={styles.galleryText}>
            🖼️  Choose from Gallery
          </Text>
        </Pressable>

      {selectedImage && (
        <Pressable
          style={styles.analyzeButton}
          onPress={() => {
            Alert.alert(
             "Analysis Complete",
            "Demo result: Rice Brown Spot detected."
          );
        }}
      >
         <Text style={styles.analyzeButtonText}>
           🔍  Analyze Disease
         </Text>
       </Pressable>
      )} 

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            💡 For better results
          </Text>

          <Text style={styles.infoText}>
            Use a clear photo of the affected leaf in good lighting.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAF7",
  },

  header: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  back: {
    fontSize: 36,
    color: "#17321D",
    width: 40,
  },

  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17321D",
  },

  empty: {
    width: 40,
  },

  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 45,
  },

  iconBox: {
    width: 90,
    height: 90,
    borderRadius: 28,
    backgroundColor: "#E4F2E7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  icon: {
    fontSize: 45,
  },

  preview: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginBottom: 25,
  },

  heading: {
    fontSize: 25,
    fontWeight: "800",
    color: "#17321D",
    textAlign: "center",
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#718078",
    textAlign: "center",
    marginBottom: 30,
  },

  cameraButton: {
    width: "100%",
    backgroundColor: "#2E7D32",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  galleryButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9E5DB",
  },

  galleryText: {
    color: "#2E7D32",
    fontSize: 15,
    fontWeight: "700",
  },

  infoCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#E6EEE8",
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#17321D",
    marginBottom: 7,
  },

  infoText: {
    fontSize: 12,
    lineHeight: 19,
    color: "#718078",
  },
    analyzeButton: {
    width: "100%",
    backgroundColor: "#1B5E20",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 10,
  },

  analyzeButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
*/

/*###########  */

/*

import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { useScanHistory } from "../context/ScanHistoryContext";
import * as ImagePicker from "expo-image-picker";

export default function DiseaseDetectionScreen() {
  const { addScan } = useScanHistory();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const takePhoto = async () => {
    const permission =
      await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Camera Permission",
        "Please allow camera access to take a crop photo."
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowResult(false);
    }
  };

  const chooseFromGallery = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Gallery Permission",
        "Please allow gallery access to choose a crop image."
      );
      return;
    }

    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowResult(false);
    }
  };

  const analyzeDisease = () => {
  addScan({
    id: Date.now().toString(),
    crop: "Rice",
    disease: "Rice Brown Spot",
    confidence: 94,
    date: new Date().toLocaleString(),
  });

  setShowResult(true);
};
  const scanAnother = () => {
    setSelectedImage(null);
    setShowResult(false);
  };

  if (showResult && selectedImage) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.resultContainer}
        >
          <View style={styles.header}>
            <Text style={styles.back}>‹</Text>
            <Text style={styles.title}>Analysis Result</Text>
            <View style={styles.empty} />
          </View>

          <Image
            source={{ uri: selectedImage }}
            style={styles.resultImage}
          />

          <View style={styles.resultHeader}>
            <View>
              <Text style={styles.resultLabel}>
                Disease detected
              </Text>

              <Text style={styles.diseaseName}>
                Rice Brown Spot
              </Text>
            </View>

            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>
                Review
              </Text>
            </View>
          </View>

          <View style={styles.confidenceCard}>
            <View>
              <Text style={styles.smallLabel}>
                AI Confidence
              </Text>

              <Text style={styles.confidence}>
                94%
              </Text>
            </View>

            <View style={styles.confidenceCircle}>
              <Text style={styles.confidenceCircleText}>
                AI
              </Text>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Disease Information
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>
              🌾 What is Rice Brown Spot?
            </Text>

            <Text style={styles.infoText}>
              Brown spot is a fungal disease that can affect
              rice leaves and reduce crop health if it spreads.
            </Text>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Recommended Treatment
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>
              💊 Treatment
            </Text>

            <Text style={styles.infoText}>
              Keep the field properly fertilized and maintain
              good crop nutrition. Remove severely affected
              plant material and follow locally recommended
              fungicide guidance when necessary.
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>
              🛡️ Prevention
            </Text>

            <Text style={styles.infoText}>
              Use healthy seeds, maintain balanced fertilizer
              application, avoid excessive moisture, and
              regularly monitor your rice crop.
            </Text>
          </View>

          <Pressable
            style={styles.scanAgainButton}
            onPress={scanAnother}
          >
            <Text style={styles.scanAgainText}>
              📷  Scan Another Leaf
            </Text>
          </Pressable>

          <View style={{ height: 30 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.back}>‹</Text>
          <Text style={styles.title}>Disease Detection</Text>
          <View style={styles.empty} />
        </View>

        {selectedImage ? (
          <Image
            source={{ uri: selectedImage }}
            style={styles.preview}
          />
        ) : (
          <View style={styles.iconBox}>
            <Text style={styles.icon}>🌿</Text>
          </View>
        )}

        <Text style={styles.heading}>
          {selectedImage
            ? "Crop image selected"
            : "Check your crop health"}
        </Text>

        <Text style={styles.description}>
          {selectedImage
            ? "Your crop image is ready. Analyze it to check for possible diseases."
            : "Take a photo of a crop leaf or choose an image from your gallery. CropCare AI will analyze it for possible diseases."}
        </Text>

        <Pressable
          style={styles.cameraButton}
          onPress={takePhoto}
        >
          <Text style={styles.buttonText}>
            📷  Take a Photo
          </Text>
        </Pressable>

        <Pressable
          style={styles.galleryButton}
          onPress={chooseFromGallery}
        >
          <Text style={styles.galleryText}>
            🖼️  Choose from Gallery
          </Text>
        </Pressable>

        {selectedImage && (
          <Pressable
            style={styles.analyzeButton}
            onPress={analyzeDisease}
          >
            <Text style={styles.analyzeButtonText}>
              🔍  Analyze Disease
            </Text>
          </Pressable>
        )}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            💡 For better results
          </Text>

          <Text style={styles.infoText}>
            Use a clear photo of the affected leaf in good
            lighting.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAF7",
  },

  content: {
    paddingHorizontal: 25,
    paddingBottom: 30,
  },

  resultContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  header: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  back: {
    fontSize: 36,
    color: "#17321D",
    width: 40,
  },

  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17321D",
  },

  empty: {
    width: 40,
  },

  iconBox: {
    width: 90,
    height: 90,
    borderRadius: 28,
    backgroundColor: "#E4F2E7",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 25,
  },

  icon: {
    fontSize: 45,
  },

  preview: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 25,
  },

  heading: {
    fontSize: 25,
    fontWeight: "800",
    color: "#17321D",
    textAlign: "center",
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#718078",
    textAlign: "center",
    marginBottom: 25,
  },

  cameraButton: {
    width: "100%",
    backgroundColor: "#2E7D32",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  galleryButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9E5DB",
  },

  galleryText: {
    color: "#2E7D32",
    fontSize: 15,
    fontWeight: "700",
  },

  analyzeButton: {
    width: "100%",
    backgroundColor: "#1B5E20",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 10,
  },

  analyzeButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  infoCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#E6EEE8",
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#17321D",
    marginBottom: 7,
  },

  infoText: {
    fontSize: 12,
    lineHeight: 19,
    color: "#718078",
  },

  resultImage: {
    width: "100%",
    height: 230,
    borderRadius: 22,
    marginBottom: 20,
  },

  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  resultLabel: {
    fontSize: 12,
    color: "#718078",
    marginBottom: 5,
  },

  diseaseName: {
    fontSize: 24,
    fontWeight: "800",
    color: "#17321D",
  },

  statusBadge: {
    backgroundColor: "#FFF3D6",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },

  statusText: {
    color: "#A66A00",
    fontSize: 12,
    fontWeight: "700",
  },

  confidenceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E6EEE8",
    marginBottom: 25,
  },

  smallLabel: {
    fontSize: 12,
    color: "#718078",
    marginBottom: 5,
  },

  confidence: {
    fontSize: 28,
    fontWeight: "800",
    color: "#2E7D32",
  },

  confidenceCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
  },

  confidenceCircleText: {
    fontSize: 15,
    fontWeight: "800",
    color: "#2E7D32",
  },

  sectionHeader: {
    marginBottom: 12,
    marginTop: 2,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17321D",
  },

  scanAgainButton: {
    width: "100%",
    backgroundColor: "#2E7D32",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    marginTop: 25,
  },

  scanAgainText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});

*/

import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { useScanHistory } from "../context/ScanHistoryContext";
import * as ImagePicker from "expo-image-picker";
import { File } from "expo-file-system";

export default function DiseaseDetectionScreen() {
  const { addScan } = useScanHistory();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [showResult, setShowResult] = useState(false);

  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [prediction, setPrediction] = useState<{
    disease: string;
    confidence: number;
  } | null>(null);

  const takePhoto = async () => {
    const permission =
      await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Camera Permission",
        "Please allow camera access to take a crop photo."
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowResult(false);
      setPrediction(null);
    }
  };

  const chooseFromGallery = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Gallery Permission",
        "Please allow gallery access to choose a crop image."
      );
      return;
    }

    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowResult(false);
      setPrediction(null);
    }
  };

  
  const analyzeDisease = async () => {
  if (!selectedImage) {
    Alert.alert(
      "No Image",
      "Please select a rice leaf image first."
    );
    return;
  }

  setIsAnalyzing(true);

  try {
    const formData = new FormData();

    const imageFile = new File(selectedImage);

    formData.append("file", imageFile);

    const response = await fetch(
      "http://192.168.100.15:8000/predict",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(
        `Server returned ${response.status}`
      );
    }

    const result = await response.json();

    console.log("AI Result:", result);

    const diseaseName = result.disease;
    const confidenceValue = Number(result.confidence);

    setPrediction({
      disease: diseaseName,
      confidence: confidenceValue,
    });

    addScan({
      id: Date.now().toString(),
      crop: "Rice",
      disease: diseaseName,
      confidence: confidenceValue,
      date: new Date().toLocaleString(),
    });

    setShowResult(true);
  } catch (error) {
    console.log("Prediction Error:", error);

    Alert.alert(
      "Analysis Error",
      "Could not analyze the image. Please try again."
    );
  } finally {
    setIsAnalyzing(false);
  }
};
  

  const scanAnother = () => {
    setSelectedImage(null);
    setShowResult(false);
    setPrediction(null);
  };

  const getDiseaseTitle = () => {
    if (!prediction) {
      return "Rice Disease";
    }

    switch (prediction.disease) {
      case "Bacterial_Leaf_Blight":
        return "Bacterial Leaf Blight";

      case "Brown_Spot":
        return "Brown Spot";

      case "Healthy_Rice_Leaf":
        return "Healthy Rice Leaf";

      case "Leaf_Blast":
        return "Leaf Blast";

      case "Leaf_Scald":
        return "Leaf Scald";

      case "Sheath_Blight":
        return "Sheath Blight";

      default:
        return prediction.disease.replaceAll("_", " ");
    }
  };

  const getDiseaseInformation = () => {
    if (!prediction) {
      return {
        title: "Rice Disease",
        description:
          "CropCare AI analyzed your rice leaf image.",
        treatment:
          "Follow recommended agricultural practices and monitor the crop regularly.",
        prevention:
          "Use healthy seeds, maintain good crop nutrition, and regularly monitor your rice field.",
      };
    }

    switch (prediction.disease) {
      case "Bacterial_Leaf_Blight":
        return {
          title: "What is Bacterial Leaf Blight?",
          description:
            "Bacterial Leaf Blight is a bacterial disease that can cause water soaked lesions and drying of rice leaves.",
          treatment:
            "Use healthy planting material, maintain balanced crop nutrition, and follow locally recommended disease management practices.",
          prevention:
            "Use healthy seeds, avoid excessive nitrogen, maintain field hygiene, and monitor affected plants regularly.",
        };

      case "Brown_Spot":
        return {
          title: "What is Brown Spot?",
          description:
            "Brown Spot is a fungal disease that can produce brown lesions on rice leaves and reduce crop health.",
          treatment:
            "Maintain balanced crop nutrition and follow locally recommended fungicide guidance when necessary.",
          prevention:
            "Use healthy seeds, maintain balanced fertilizer application, and regularly monitor rice leaves.",
        };

      case "Healthy_Rice_Leaf":
        return {
          title: "Healthy Rice Leaf",
          description:
            "The model classified this image as a healthy rice leaf with no major disease detected.",
          treatment:
            "No disease treatment is indicated by this prediction. Continue normal crop care and monitoring.",
          prevention:
            "Maintain good irrigation, balanced nutrition, field hygiene, and regular crop monitoring.",
        };

      case "Leaf_Blast":
        return {
          title: "What is Leaf Blast?",
          description:
            "Leaf Blast is a fungal disease that can create characteristic lesions on rice leaves and affect crop growth.",
          treatment:
            "Maintain balanced nitrogen application and follow locally recommended fungicide guidance when necessary.",
          prevention:
            "Use healthy seeds, avoid excessive nitrogen, maintain appropriate field conditions, and monitor the crop regularly.",
        };

      case "Leaf_Scald":
        return {
          title: "What is Leaf Scald?",
          description:
            "Leaf Scald is a rice disease that can cause scald like lesions and damage to leaf tissue.",
          treatment:
            "Maintain good crop nutrition and follow locally recommended disease management practices.",
          prevention:
            "Use healthy planting material, maintain field hygiene, and regularly inspect rice leaves.",
        };

      case "Sheath_Blight":
        return {
          title: "What is Sheath Blight?",
          description:
            "Sheath Blight is a fungal disease that mainly affects the leaf sheaths and can spread under favorable conditions.",
          treatment:
            "Avoid excessive nitrogen and follow locally recommended fungicide guidance when necessary.",
          prevention:
            "Maintain suitable plant spacing, avoid excessive moisture, use balanced fertilizer, and monitor the crop regularly.",
        };

      default:
        return {
          title: "Disease Information",
          description:
            "CropCare AI detected a possible rice leaf condition.",
          treatment:
            "Monitor the crop and follow locally recommended agricultural guidance.",
          prevention:
            "Maintain good crop nutrition, field hygiene, and regular crop monitoring.",
        };
    }
  };

  const diseaseInfo = getDiseaseInformation();

  if (showResult && selectedImage && prediction) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.resultContainer}
        >
          <View style={styles.header}>
            <Text style={styles.back}>‹</Text>

            <Text style={styles.title}>
              Analysis Result
            </Text>

            <View style={styles.empty} />
          </View>

          <Image
            source={{ uri: selectedImage }}
            style={styles.resultImage}
          />

          <View style={styles.resultHeader}>
            <View style={styles.diseaseHeaderText}>
              <Text style={styles.resultLabel}>
                Disease detected
              </Text>

              <Text style={styles.diseaseName}>
                {getDiseaseTitle()}
              </Text>
            </View>

            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>
                AI Result
              </Text>
            </View>
          </View>

          <View style={styles.confidenceCard}>
            <View>
              <Text style={styles.smallLabel}>
                AI Confidence
              </Text>

              <Text style={styles.confidence}>
                {prediction.confidence.toFixed(2)}%
              </Text>
            </View>

            <View style={styles.confidenceCircle}>
              <Text style={styles.confidenceCircleText}>
                AI
              </Text>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Disease Information
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>
              🌾 {diseaseInfo.title}
            </Text>

            <Text style={styles.infoText}>
              {diseaseInfo.description}
            </Text>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Recommended Treatment
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>
              💊 Treatment
            </Text>

            <Text style={styles.infoText}>
              {diseaseInfo.treatment}
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>
              🛡️ Prevention
            </Text>

            <Text style={styles.infoText}>
              {diseaseInfo.prevention}
            </Text>
          </View>

          <Pressable
            style={styles.scanAgainButton}
            onPress={scanAnother}
          >
            <Text style={styles.scanAgainText}>
              📷  Scan Another Leaf
            </Text>
          </Pressable>

          <View style={{ height: 30 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.back}>‹</Text>

          <Text style={styles.title}>
            Disease Detection
          </Text>

          <View style={styles.empty} />
        </View>

        {selectedImage ? (
          <Image
            source={{ uri: selectedImage }}
            style={styles.preview}
          />
        ) : (
          <View style={styles.iconBox}>
            <Text style={styles.icon}>🌿</Text>
          </View>
        )}

        <Text style={styles.heading}>
          {selectedImage
            ? "Crop image selected"
            : "Check your crop health"}
        </Text>

        <Text style={styles.description}>
          {selectedImage
            ? "Your crop image is ready. Analyze it using the CropCare AI disease detection model."
            : "Take a photo of a crop leaf or choose an image from your gallery. CropCare AI will analyze it for possible diseases."}
        </Text>

        <Pressable
          style={styles.cameraButton}
          onPress={takePhoto}
          disabled={isAnalyzing}
        >
          <Text style={styles.buttonText}>
            📷  Take a Photo
          </Text>
        </Pressable>

        <Pressable
          style={styles.galleryButton}
          onPress={chooseFromGallery}
          disabled={isAnalyzing}
        >
          <Text style={styles.galleryText}>
            🖼️  Choose from Gallery
          </Text>
        </Pressable>

        {selectedImage && (
          <Pressable
            style={styles.analyzeButton}
            onPress={analyzeDisease}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <View style={styles.loadingRow}>
                <ActivityIndicator
                  size="small"
                  color="#FFFFFF"
                />

                <Text style={styles.analyzeButtonText}>
                  AI is analyzing...
                </Text>
              </View>
            ) : (
              <Text style={styles.analyzeButtonText}>
                🔍  Analyze Disease
              </Text>
            )}
          </Pressable>
        )}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            💡 For better results
          </Text>

          <Text style={styles.infoText}>
            Use a clear photo of the affected rice leaf in
            good lighting. Keep the leaf visible and avoid
            blurry images.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAF7",
  },

  content: {
    paddingHorizontal: 25,
    paddingBottom: 30,
  },

  resultContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  header: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  back: {
    fontSize: 36,
    color: "#17321D",
    width: 40,
  },

  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17321D",
  },

  empty: {
    width: 40,
  },

  iconBox: {
    width: 90,
    height: 90,
    borderRadius: 28,
    backgroundColor: "#E4F2E7",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 25,
  },

  icon: {
    fontSize: 45,
  },

  preview: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 25,
  },

  heading: {
    fontSize: 25,
    fontWeight: "800",
    color: "#17321D",
    textAlign: "center",
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#718078",
    textAlign: "center",
    marginBottom: 25,
  },

  cameraButton: {
    width: "100%",
    backgroundColor: "#2E7D32",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  galleryButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9E5DB",
  },

  galleryText: {
    color: "#2E7D32",
    fontSize: 15,
    fontWeight: "700",
  },

  analyzeButton: {
    width: "100%",
    backgroundColor: "#1B5E20",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 10,
  },

  analyzeButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  loadingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  infoCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#E6EEE8",
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#17321D",
    marginBottom: 7,
  },

  infoText: {
    fontSize: 12,
    lineHeight: 19,
    color: "#718078",
  },

  resultImage: {
    width: "100%",
    height: 230,
    borderRadius: 22,
    marginBottom: 20,
  },

  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  diseaseHeaderText: {
    flex: 1,
    paddingRight: 10,
  },

  resultLabel: {
    fontSize: 12,
    color: "#718078",
    marginBottom: 5,
  },

  diseaseName: {
    fontSize: 24,
    fontWeight: "800",
    color: "#17321D",
  },

  statusBadge: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },

  statusText: {
    color: "#2E7D32",
    fontSize: 12,
    fontWeight: "700",
  },

  confidenceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E6EEE8",
    marginBottom: 25,
  },

  smallLabel: {
    fontSize: 12,
    color: "#718078",
    marginBottom: 5,
  },

  confidence: {
    fontSize: 28,
    fontWeight: "800",
    color: "#2E7D32",
  },

  confidenceCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
  },

  confidenceCircleText: {
    fontSize: 15,
    fontWeight: "800",
    color: "#2E7D32",
  },

  sectionHeader: {
    marginBottom: 12,
    marginTop: 2,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17321D",
  },

  scanAgainButton: {
    width: "100%",
    backgroundColor: "#2E7D32",
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
    marginTop: 25,
  },

  scanAgainText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});