/*import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/DashboardScreen";
import DiseaseDetectionScreen from "../screens/DiseaseDetectionScreen";
import AIAssistantScreen from "../screens/AIAssistantScreen";

export type RootStackParamList = {
  Dashboard: undefined;
  DiseaseDetection: undefined;
  AIAssistant: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Stack.Screen
        name="DiseaseDetection"
        component={DiseaseDetectionScreen}
      />
      <Stack.Screen
        name="AIAssistant"
        component={AIAssistantScreen}
/>
    </Stack.Navigator>
  );
}

*/

/*corect but only new */

/*
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeatherScreen from "../screens/WeatherScreen";
import HistoryScreen from "../screens/HistoryScreen";
import DashboardScreen from "../screens/DashboardScreen";
import DiseaseDetectionScreen from "../screens/DiseaseDetectionScreen";
import AIAssistantScreen from "../screens/AIAssistantScreen";

export type RootStackParamList = {
  Dashboard: undefined;
  DiseaseDetection: undefined;
  AIAssistant: undefined;
  Weather: undefined;
  History: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
       initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Stack.Screen
        name="DiseaseDetection"
        component={DiseaseDetectionScreen}
      />

      <Stack.Screen
        name="AIAssistant"
        component={AIAssistantScreen}
      />

      <Stack.Screen
        name="Weather"
        component={WeatherScreen}
      />

      <Stack.Screen
        name="History"
        component={HistoryScreen}
      />

    </Stack.Navigator>
 
  );
}
  */


import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashboardScreen from "../screens/DashboardScreen";
import DiseaseDetectionScreen from "../screens/DiseaseDetectionScreen";
import AIAssistantScreen from "../screens/AIAssistantScreen";
import WeatherScreen from "../screens/WeatherScreen";
import HistoryScreen from "../screens/HistoryScreen";

export type RootStackParamList = {
  Dashboard: undefined;
  DiseaseDetection: undefined;
  AIAssistant: undefined;
  Weather: undefined;
  History: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Stack.Screen
        name="DiseaseDetection"
        component={DiseaseDetectionScreen}
      />

      <Stack.Screen
        name="AIAssistant"
        component={AIAssistantScreen}
      />

      <Stack.Screen
        name="Weather"
        component={WeatherScreen}
      />

      <Stack.Screen
        name="History"
        component={HistoryScreen}
      />
    </Stack.Navigator>
  );
}

  
