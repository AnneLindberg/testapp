// MainStack.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dashboard } from "./Dashboard";
import { QuestionCard } from "./QuestionCard";
import { MainStackParamList } from "../NavigationParamList";

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="QuestionCard"
      component={QuestionCard}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
