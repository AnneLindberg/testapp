import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from "react-native";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { Logo } from "./Logo";
type DashboardProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Dashboard">,
};

const categories = [
    "The Friendly Talks",
    "The Love Talks",
    "The First Talks",
    "The Deep Talks",
    "The Fun Talks"
];

export function Dashboard({ navigation }: DashboardProps) {
    return (
        <View style={styles.container}>
            <Logo></Logo>
            <View style={styles.buttonsContainer}>
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.categoryButton}
                        onPress={() => navigation.navigate("QuestionCard", { category })}
                    >
                        <Text style={styles.categoryText}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center", // Center content vertically
        alignItems: "center",      // Center content horizontally
        backgroundColor: "#f0f0f0",
    },
    buttonsContainer: {
        width: "100%",          // Ensures buttons are centered within full width
        alignItems: "center",    // Centers the button elements
        paddingHorizontal: 20,
    },
    categoryButton: {
        width: "80%",            // Makes button width a bit narrower than screen width
        paddingVertical: 15,
        marginVertical: 10,
        backgroundColor: "#2e6ddf",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    categoryText: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
    },
});

export default Dashboard;
