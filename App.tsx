import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { ScanHistoryProvider } from "./src/context/ScanHistoryContext";

export default function App() {
  return (
    <ScanHistoryProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ScanHistoryProvider>
  );
}