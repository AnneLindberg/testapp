// App.tsx
import React from "react";
import { MainStack } from "./src/components/MainStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}
