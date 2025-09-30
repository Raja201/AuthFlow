import React, { createContext, useState, useEffect } from "react";
import axios from "../api/axiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const setAxiosToken = (token) => {
    if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    else delete axios.defaults.headers.common["Authorization"];
  };

  useEffect(() => {
    // ... (restoreUser remains the same)
    const restoreUser = async () => {
      try {
        const stored = await AsyncStorage.getItem("user");
        if (stored) {
          const parsed = JSON.parse(stored);
          setUser(parsed);
          setAxiosToken(parsed.token);
        }
      } finally {
        setIsLoading(false);
      }
    };
    restoreUser();
  }, []);

  // ✅ Update register to accept and send 'email'
  const register = async (username, password, email) => { // ⬅️ ACCEPT EMAIL
    try {
      // ⬅️ SEND EMAIL IN THE POST BODY
      const res = await axios.post("/api/auth/register", { username, password, email }); 
      alert("User registered successfully!");
      return true; // let screen handle navigation
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert("Registration failed: " + (error.response?.data?.error || error.message));
      return false;
    }
  };
  
  const login = async (username, password) => {
    try {
      const res = await axios.post("/api/auth/login", { username, password });

      // ⬇️ UPDATED: Include email in the payload 
      const payload = { 
        username: res.data.username, 
        email: res.data.email, 
        token: res.data.token 
      };

      setUser(payload);
      setAxiosToken(payload.token);
      await AsyncStorage.setItem("user", JSON.stringify(payload));

      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed: " + (error.response?.data?.error || error.message));
    }
  };

  const logout = async () => {
    setUser(null);
    setAxiosToken(null);
    await AsyncStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
