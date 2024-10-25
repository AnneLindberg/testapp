// MainStack.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Dashboard } from "./Dashboard";
import { QuestionCard } from "./QuestionCard";
import { MainStackParamList } from "../NavigationParamList";

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => (
        <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: "Question Categories",  headerShown: false  }} />
            <Stack.Screen
                name="QuestionCard"
                component={QuestionCard}
                options={({ route }) => ({ title: route.params.category })}
            />
        </Stack.Navigator>
);
