// ScreenOne.tsx
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../NavigationParamList";
import { RouteProp } from "@react-navigation/native";

type ScreenOneProps = {
    route: RouteProp<MainStackParamList, "One">;
    navigation: StackNavigationProp<MainStackParamList, "One">;
};

export function ScreenOne({ navigation }: ScreenOneProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Hello World!</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert("Tapped!")}
            >
                <Text style={styles.buttonText}>Tap me for an alert</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Two", { message: "Hello, world!" })}
            >
                <Text style={styles.buttonText}>Go to next screen</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        backgroundColor: "#2e6ddf",
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
});
