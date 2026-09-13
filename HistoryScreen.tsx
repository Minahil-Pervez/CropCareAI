import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useScanHistory } from "../context/ScanHistoryContext";
import { useNavigation } from "@react-navigation/native";

export default function HistoryScreen() {
  const { scans } = useScanHistory();
  const navigation = useNavigation<any>();

  const totalScans = scans.length;

  const healthyScans = scans.filter((scan) =>
    scan.disease.toLowerCase().includes("healthy")
  ).length;

  const diseaseScans = scans.filter(
    (scan) => !scan.disease.toLowerCase().includes("healthy")
  ).length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Scan History</Text>
            <Text style={styles.subtitle}>
              Your previous crop scans
            </Text>
          </View>

          <Text style={styles.headerIcon}>📋</Text>
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>
              {totalScans}
            </Text>

            <Text style={styles.summaryLabel}>
              Total Scans
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>
              {healthyScans}
            </Text>

            <Text style={styles.summaryLabel}>
              Healthy
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryItem}>
            <Text style={styles.summaryNumber}>
              {diseaseScans}
            </Text>

            <Text style={styles.summaryLabel}>
              Disease Found
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Recent Scans
        </Text>

        {scans.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>📋</Text>

            <Text style={styles.emptyTitle}>
              No scans yet
            </Text>

            <Text style={styles.emptyText}>
              Your crop scans will appear here after you
              analyze a leaf.
            </Text>
          </View>
        ) : (
          scans.map((scan) => {
            const isHealthy = scan.disease
              .toLowerCase()
              .includes("healthy");

            return (
              <View
                key={scan.id}
                style={styles.scanCard}
              >
                <View style={styles.cropIcon}>
                  <Text style={styles.cropEmoji}>
                    {scan.crop === "Rice"
                      ? "🌾"
                      : scan.crop === "Maize"
                      ? "🌽"
                      : scan.crop === "Wheat"
                      ? "🌾"
                      : "🌱"}
                  </Text>
                </View>

                <View style={styles.scanInfo}>
                  <Text style={styles.cropName}>
                    {scan.crop}
                  </Text>

                  <Text
                    style={
                      isHealthy
                        ? styles.healthyName
                        : styles.diseaseName
                    }
                  >
                    {scan.disease}
                  </Text>

                  <Text style={styles.date}>
                    {scan.date}
                  </Text>
                </View>

                <View
                  style={
                    isHealthy
                      ? styles.healthyBadge
                      : styles.diseaseBadge
                  }
                >
                  <Text
                    style={
                      isHealthy
                        ? styles.healthyBadgeText
                        : styles.diseaseBadgeText
                    }
                  >
                    {scan.confidence}%
                  </Text>
                </View>
              </View>
            );
          })
        )}

       <Pressable
          style={styles.scanButton}
          onPress={() => navigation.navigate("DiseaseDetection")}
        >
          <Text style={styles.scanButtonText}>
             📷 Scan New Leaf
          </Text>
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

  headerIcon: {
    fontSize: 34,
  },

  summaryCard: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#DFF1E4",
    borderRadius: 20,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  summaryItem: {
    alignItems: "center",
    flex: 1,
  },

  summaryNumber: {
    fontSize: 25,
    fontWeight: "700",
    color: "#28563B",
  },

  summaryLabel: {
    fontSize: 12,
    color: "#617568",
    marginTop: 4,
    textAlign: "center",
  },

  divider: {
    width: 1,
    height: 35,
    backgroundColor: "#B8D4C0",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#173B2A",
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 12,
  },

  emptyCard: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 30,
    alignItems: "center",
  },

  emptyIcon: {
    fontSize: 40,
    marginBottom: 10,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#173B2A",
  },

  emptyText: {
    fontSize: 13,
    color: "#7A8780",
    textAlign: "center",
    marginTop: 6,
    lineHeight: 20,
  },

  scanCard: {
    marginHorizontal: 20,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  cropIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#E8F4EA",
    justifyContent: "center",
    alignItems: "center",
  },

  cropEmoji: {
    fontSize: 25,
  },

  scanInfo: {
    flex: 1,
    marginLeft: 14,
  },

  cropName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#173B2A",
  },

  diseaseName: {
    fontSize: 13,
    color: "#B15B36",
    marginTop: 3,
  },

  healthyName: {
    fontSize: 13,
    color: "#3A7A50",
    marginTop: 3,
  },

  date: {
    fontSize: 11,
    color: "#8A978F",
    marginTop: 4,
  },

  diseaseBadge: {
    backgroundColor: "#FCE9E2",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },

  diseaseBadgeText: {
    color: "#B15B36",
    fontWeight: "700",
    fontSize: 12,
  },

  healthyBadge: {
    backgroundColor: "#E4F3E7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },

  healthyBadgeText: {
    color: "#3A7A50",
    fontWeight: "700",
    fontSize: 12,
  },

  scanButton: {
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 30,
    backgroundColor: "#2F7D4A",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  scanButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});




