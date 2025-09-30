import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

// Brand colors (you can tweak)
const BRAND_COLOR = "#007AFF";
const TEXT_COLOR = "#333333";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* App Title / Welcome Message */}
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.brand}>Curitics Health</Text>

      {/* Loading Indicator */}
      <ActivityIndicator size="large" color={BRAND_COLOR} style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: TEXT_COLOR,
    fontWeight: "500",
    marginBottom: 4,
  },
  brand: {
    fontSize: 28,
    fontWeight: "bold",
    color: BRAND_COLOR,
    marginBottom: 30,
  },
  loader: {
    marginTop: 20,
  }
});
