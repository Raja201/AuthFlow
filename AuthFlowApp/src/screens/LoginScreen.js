import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Platform } from "react-native";
import { AuthContext } from "../context/AuthContext";

const BRAND_COLOR = "#007AFF"; // A clean blue for primary actions

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        <View style={styles.card}>
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#888"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#888"
          />
          
          <TouchableOpacity 
            style={styles.primaryButton} 
            onPress={() => login(username, password)}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.linkButtonText}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA', // Light background for the whole screen
  },
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: 'center',
    padding: 25, 
  },
  header: { 
    fontSize: 30, 
    fontWeight: "700", 
    color: '#333',
    marginBottom: 5, 
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
    marginBottom: 30,
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#E0E0E0',
    padding: 15, 
    marginBottom: 15, 
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#F9F9F9',
  },
  primaryButton: {
    backgroundColor: BRAND_COLOR,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 15,
    color: '#666',
    marginRight: 5,
  },
  linkButtonText: {
    fontSize: 15,
    color: BRAND_COLOR,
    fontWeight: '600',
  }
});