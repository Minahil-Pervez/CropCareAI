import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

export default function WeatherScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Weather</Text>
            <Text style={styles.subtitle}>CropCare AI</Text>
          </View>

          <Text style={styles.weatherIcon}>☀️</Text>
        </View>

        <View style={styles.currentCard}>
          <Text style={styles.location}>Current Weather</Text>
          <Text style={styles.temperature}>32°C</Text>
          <Text style={styles.condition}>Sunny</Text>
          <Text style={styles.description}>
            Good conditions for crop monitoring
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Today's Conditions</Text>

        <View style={styles.grid}>
          <View style={styles.infoCard}>
            <Text style={styles.icon}>💧</Text>
            <Text style={styles.value}>68%</Text>
            <Text style={styles.label}>Humidity</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.icon}>💨</Text>
            <Text style={styles.value}>12 km/h</Text>
            <Text style={styles.label}>Wind</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.icon}>🌧️</Text>
            <Text style={styles.value}>10%</Text>
            <Text style={styles.label}>Rain Chance</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.icon}>🌱</Text>
            <Text style={styles.value}>Low</Text>
            <Text style={styles.label}>Disease Risk</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Crop Advice</Text>

        <View style={styles.adviceCard}>
          <Text style={styles.adviceTitle}>
            🌾 Good day for crop monitoring
          </Text>

          <Text style={styles.adviceText}>
            Weather conditions are currently suitable for checking your
            crops. Monitor leaves for signs of disease and maintain proper
            irrigation.
          </Text>
        </View>

        <Pressable style={styles.refreshButton}>
          <Text style={styles.refreshText}>Refresh Weather</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8F5",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#173B2A",
  },

  subtitle: {
    fontSize: 14,
    color: "#6C7A72",
    marginTop: 4,
  },

  weatherIcon: {
    fontSize: 42,
  },

  currentCard: {
    marginHorizontal: 20,
    marginTop: 10,
    padding: 25,
    borderRadius: 24,
    backgroundColor: "#DFF1E4",
    alignItems: "center",
  },

  location: {
    fontSize: 15,
    color: "#557060",
  },

  temperature: {
    fontSize: 54,
    fontWeight: "700",
    color: "#173B2A",
    marginTop: 8,
  },

  condition: {
    fontSize: 20,
    fontWeight: "600",
    color: "#28563B",
  },

  description: {
    fontSize: 14,
    color: "#617568",
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#173B2A",
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 14,
  },

  infoCard: {
    width: "46%",
    margin: "2%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    alignItems: "center",
  },

  icon: {
    fontSize: 26,
  },

  value: {
    fontSize: 20,
    fontWeight: "700",
    color: "#173B2A",
    marginTop: 8,
  },

  label: {
    fontSize: 13,
    color: "#718078",
    marginTop: 4,
  },

  adviceCard: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
  },

  adviceTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#28563B",
  },

  adviceText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#66736B",
    marginTop: 10,
  },

  refreshButton: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: "#2F7D4A",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  refreshText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});