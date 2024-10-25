// ScreenTwo.tsx
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../NavigationParamList";
import { RouteProp } from "@react-navigation/native";

type ScreenTwoProps = {
    route: RouteProp<MainStackParamList, "Two">;
    navigation: StackNavigationProp<MainStackParamList, "Two">;
};

export function ScreenTwo({ navigation, route }: ScreenTwoProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>You're viewing screen two!</Text>
            <Text style={styles.text}>Message: {route.params?.message}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
    },
    text: {
        fontSize: 24,
        color: "black",
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#2e6ddf",
        padding: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
});
