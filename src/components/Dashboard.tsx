// Dashboard.tsx
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../NavigationParamList";
import {
  Users,
  Heart,
  Users2,
  HandHeart,
  MessageCircle,
} from "lucide-react-native";
import { useFonts } from "expo-font";
import {
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
} from "@expo-google-fonts/playfair-display";
import {
  CrimsonPro_400Regular,
  CrimsonPro_500Medium,
} from "@expo-google-fonts/crimson-pro";

type DashboardProps = {
  navigation: StackNavigationProp<MainStackParamList, "Dashboard">;
};

const categories = [
  {
    id: "The Friendly Talks",
    name: "The Friendly Talks",
    icon: Users,
    description: "Celebrate your friendships",
  },
  {
    id: "The Love Talks",
    name: "The Love Talks",
    icon: Heart,
    description: "Deepen your romantic bond",
  },
  {
    id: "The First Talks",
    name: "The First Talks",
    icon: Users2,
    description: "Connect on a first date",
  },
  {
    id: "The Deep Talks",
    name: "The Deep Talks",
    icon: HandHeart,
    description: "Strengthen your partnership",
  },
  {
    id: "The Fun Talks",
    name: "Fun",
    icon: MessageCircle,
    description: "Enjoy fun conversations",
  },
];

export function Dashboard({ navigation }: DashboardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meaningful Conversations</Text>
        <View style={styles.subtitleContainer}>
          <MessageCircle size={20} color="#6B7280" />
          <Text style={styles.subtitle}>Start a deeper dialogue</Text>
        </View>
        <Text style={styles.description}>
          Choose a category and explore thoughtful questions to strengthen your
          relationships through meaningful conversations.
        </Text>
      </View>

      <View style={styles.grid}>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Pressable
              key={category.id}
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
              onPress={() =>
                navigation.navigate("QuestionCard", { category: category.id })
              }
            >
              <Icon
                size={32}
                strokeWidth={1.5}
                color="#374151"
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{category.name}</Text>
                <Text style={styles.cardDescription}>
                  {category.description}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FCF9F3",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontFamily: "PlayfairDisplay_600SemiBold",
    fontSize: 32,
    color: "#1F2937",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: "CrimsonPro_500Medium",
    fontSize: 18,
    fontStyle: "italic",
    color: "#6B7280",
    marginLeft: 8,
  },
  description: {
    fontFamily: "CrimsonPro_400Regular",
    fontSize: 18,
    color: "#4B5563",
    textAlign: "center",
    maxWidth: 320,
    lineHeight: 24,
  },
  grid: {
    gap: 16,
  },
  card: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: "#D1D5DB80",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
  },
  icon: {
    alignSelf: "center",
    marginBottom: 16,
  },
  cardContent: {
    alignItems: "center",
  },
  cardTitle: {
    fontFamily: "PlayfairDisplay_500Medium",
    fontSize: 24,
    color: "#1F2937",
    marginBottom: 8,
    textAlign: "center",
  },
  cardDescription: {
    fontFamily: "CrimsonPro_400Regular",
    fontSize: 16,
    color: "#4B5563",
    fontStyle: "italic",
    textAlign: "center",
  },
});
