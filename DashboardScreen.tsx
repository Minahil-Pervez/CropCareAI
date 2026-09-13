import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function DashboardScreen() {
    const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F6FAF7" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning 👋</Text>
            <Text style={styles.title}>CropCare AI</Text>
          </View>

          <View style={styles.profile}>
            <Text style={styles.profileText}>👨‍🌾</Text>
          </View>
        </View>

        {/* Hero */}
        <LinearGradient
          colors={["#1B5E20", "#2E7D32", "#43A047"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <View style={styles.heroContent}>
            <View style={styles.heroIcon}>
              <Text style={styles.heroEmoji}>🌱</Text>
            </View>

            <Text style={styles.heroTitle}>
              Smart farming starts here 
            </Text>

            <Text style={styles.heroText}>
              Detect crop diseases, check weather, and get AI powered farming
              guidance.
            </Text>

            <Pressable
               style={styles.scanButton}
               onPress={() => navigation.navigate("DiseaseDetection")}
>
              <Text style={styles.scanButtonText}>
              📷  Scan a Leaf
              </Text>
            </Pressable>
          </View>
        </LinearGradient>

        {/* Today's Overview */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's Overview</Text>
          <Text style={styles.seeAll}>View details</Text>
        </View>

        <View style={styles.overviewRow}>
          <View style={styles.overviewCard}>
            <Text style={styles.cardIcon}>☀️</Text>
            <Text style={styles.cardLabel}>Temperature</Text>
            <Text style={styles.cardValue}>30°</Text>
            <Text style={styles.cardSmall}>Clear sky</Text>
          </View>

          <View style={styles.overviewCard}>
            <Text style={styles.cardIcon}>💧</Text>
            <Text style={styles.cardLabel}>Humidity</Text>
            <Text style={styles.cardValue}>68%</Text>
            <Text style={styles.cardSmall}>Moderate</Text>
          </View>

          <View style={styles.overviewCard}>
            <Text style={styles.cardIcon}>🛡️</Text>
            <Text style={styles.cardLabel}>Disease Risk</Text>
            <Text style={styles.riskValue}>Low</Text>
            <Text style={styles.cardSmall}>Today</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
        </View>

        <View style={styles.actionGrid}>
          <Pressable
            style={styles.actionCard}
            onPress={() => navigation.navigate("DiseaseDetection")}
          >
            <View style={styles.actionIconGreen}>
             <Text>📷</Text>
            </View>

            <Text style={styles.actionTitle}>Disease Scan</Text>
            <Text style={styles.actionText}>Check your crop</Text>
          </Pressable>

         <Pressable
           style={styles.actionCard}
          // onPress={() => navigation.navigate("AIAssistant")}
          onPress={() => {
          console.log("AI Assistant button pressed");
          navigation.navigate("AIAssistant");
        }}
         >
          <View style={styles.actionIconYellow}>
            <Text>🤖</Text>
          </View>

          <Text style={styles.actionTitle}>AI Assistant</Text>
          <Text style={styles.actionText}>
            Ask farming questions
          </Text>
         </Pressable>

          <Pressable
             style={styles.actionCard}
            onPress={() => navigation.navigate("Weather")}
>
            <View style={styles.actionIconBlue}>
              <Text>🌦️</Text>
            </View>
            <Text style={styles.actionTitle}>Weather</Text>
            <Text style={styles.actionText}>View forecast</Text>
          </Pressable>

          <Pressable
            style={styles.actionCard}
            onPress={() => navigation.navigate("History")}
           >

            <View style={styles.actionIconPurple}>
              <Text>📊</Text>
            </View>
            <Text style={styles.actionTitle}>History</Text>
            <Text style={styles.actionText}>View previous scans</Text>
          </Pressable>
        </View>

        {/* My Crops */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Crops</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cropScroll}
        >
          <CropCard emoji="🌾" name="Rice" />
          <CropCard emoji="🌿" name="Sugarcane" />
          <CropCard emoji="🌽" name="Maize" />
          <CropCard emoji="🍈" name="Melon" />
          <CropCard emoji="🌱" name="Wheat" />
          <CropCard emoji="🌿" name="Cotton" />
        </ScrollView>

        {/* Recent Activity */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <Text style={styles.seeAll}>View all</Text>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.activityIcon}>
            <Text>🌾</Text>
          </View>

          <View style={styles.activityInfo}>
            <Text style={styles.activityTitle}>Rice scan</Text>
            <Text style={styles.activitySubtitle}>
              No disease detected
            </Text>
          </View>

          <View>
            <Text style={styles.healthy}>Healthy</Text>
            <Text style={styles.activityDate}>Today</Text>
          </View>
        </View>

        <View style={styles.activityCard}>
          <View style={styles.activityIcon}>
            <Text>🌿</Text>
          </View>

          <View style={styles.activityInfo}>
            <Text style={styles.activityTitle}>Sugarcane scan</Text>
            <Text style={styles.activitySubtitle}>
              Analysis completed
            </Text>
          </View>

          <View>
            <Text style={styles.warning}>Review</Text>
            <Text style={styles.activityDate}>Yesterday</Text>
          </View>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function CropCard({
  emoji,
  name,
}: {
  emoji: string;
  name: string;
}) {
  return (
    <Pressable style={styles.cropCard}>
      <View style={styles.cropIcon}>
        <Text style={styles.cropEmoji}>{emoji}</Text>
      </View>

      <Text style={styles.cropName}>{name}</Text>
      <Text style={styles.cropStatus}>Active</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6FAF7",
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 14,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  greeting: {
    fontSize: 14,
    color: "#718078",
    marginBottom: 4,
  },

  title: {
    fontSize: 27,
    fontWeight: "800",
    color: "#17321D",
  },

  profile: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E4F2E7",
    justifyContent: "center",
    alignItems: "center",
  },

  profileText: {
    fontSize: 25,
  },

  hero: {
    borderRadius: 26,
    overflow: "hidden",
    marginBottom: 28,
  },

  heroContent: {
    padding: 22,
  },

  heroIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.18)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  heroEmoji: {
    fontSize: 25,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "800",
    marginBottom: 8,
  },

  heroText: {
    color: "#E8F5E9",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 18,
  },

  scanButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 13,
    paddingHorizontal: 18,
    borderRadius: 14,
    alignSelf: "flex-start",
  },

  scanButtonText: {
    color: "#216B2A",
    fontSize: 14,
    fontWeight: "700",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#17321D",
  },

  seeAll: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2E7D32",
  },

  overviewRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 27,
  },

  overviewCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 13,
    minHeight: 130,
    borderWidth: 1,
    borderColor: "#E6EEE8",
  },

  cardIcon: {
    fontSize: 21,
    marginBottom: 9,
  },

  cardLabel: {
    fontSize: 11,
    color: "#718078",
    marginBottom: 5,
  },

  cardValue: {
    fontSize: 22,
    fontWeight: "800",
    color: "#17321D",
  },

  riskValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2E7D32",
    marginTop: 2,
  },

  cardSmall: {
    fontSize: 10,
    color: "#89968D",
    marginTop: 4,
  },

  actionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 27,
  },

  actionCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    padding: 15,
    marginBottom: 11,
    borderWidth: 1,
    borderColor: "#E6EEE8",
  },

  actionIconGreen: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 11,
  },

  actionIconYellow: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#FFF8E1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 11,
  },

  actionIconBlue: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 11,
  },

  actionIconPurple: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: "#F3E5F5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 11,
  },

  actionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#17321D",
    marginBottom: 4,
  },

  actionText: {
    fontSize: 11,
    color: "#7A887F",
  },

  cropScroll: {
    gap: 12,
    paddingBottom: 7,
    marginBottom: 22,
  },

  cropCard: {
    width: 118,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 13,
    borderWidth: 1,
    borderColor: "#E6EEE8",
  },

  cropIcon: {
    width: 52,
    height: 52,
    borderRadius: 17,
    backgroundColor: "#EAF5EC",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  cropEmoji: {
    fontSize: 27,
  },

  cropName: {
    fontSize: 14,
    fontWeight: "800",
    color: "#17321D",
  },

  cropStatus: {
    fontSize: 10,
    color: "#2E7D32",
    marginTop: 4,
  },

  activityCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 13,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E6EEE8",
  },

  activityIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#EAF5EC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  activityInfo: {
    flex: 1,
  },

  activityTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#17321D",
  },

  activitySubtitle: {
    fontSize: 11,
    color: "#7A887F",
    marginTop: 4,
  },

  healthy: {
    fontSize: 11,
    fontWeight: "700",
    color: "#2E7D32",
    textAlign: "right",
  },

  warning: {
    fontSize: 11,
    fontWeight: "700",
    color: "#D88A00",
    textAlign: "right",
  },

  activityDate: {
    fontSize: 10,
    color: "#9AA49E",
    marginTop: 4,
    textAlign: "right",
  },
});