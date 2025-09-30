import React, { useContext, useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  Modal, 
  Platform 
} from "react-native";
import { AuthContext } from "../context/AuthContext";

// Define professional color palette
const BRAND_COLOR = "#007AFF"; // Primary Blue for actions/titles
const ACCENT_COLOR = "#4CAF50"; // Green for health/success information
const DANGER_COLOR = "#DC3545"; 

export default function HomeScreen() {
  const { user, logout } = useContext(AuthContext);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  
  // Destructure user details (assuming 'email' is now available from AuthContext)
  // Fallback to empty string for safety
  const { username, email } = user || {};

  // Company Information (from previous search)
  const companyInfo = {
    tagline: "AI-Powered Low-Code Platform for Healthcare Workflows.",
    mission: "We improve healthcare operations by making it easy to share data, optimize workflows, and communicate with patients.",
    focus: "Curitics exists to enable the next generation of value-based care delivery programs. The platform unifies care coordination, patient engagement, clinical documentation, and risk adjustment operations.",
  };

  const UserProfileCard = () => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isProfileVisible}
      onRequestClose={() => setIsProfileVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalHeader}>Your Account</Text>
          
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Username:</Text>
            <Text style={styles.detailValue}>{username}</Text>
          </View>
          
          {/* Only display email if it exists */}
          {email && (
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Email:</Text>
              <Text style={styles.detailValue}>{email}</Text>
            </View>
          )}

          <TouchableOpacity
            style={[styles.primaryButton, styles.modalCloseButton]}
            onPress={() => setIsProfileVisible(false)}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <UserProfileCard />
      
      {/* 1. TOP HEADER BAR: Company Name, Profile Icon, and Logout Button */}
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>Curitics Health</Text>
        
        <View style={styles.headerActions}>
            {/* Profile Icon/Button to show user info */}
            <TouchableOpacity 
              style={styles.profileButton} 
              onPress={() => setIsProfileVisible(true)}
            >
              <Text style={styles.profileButtonText}>👤</Text> 
            </TouchableOpacity>
            
            {/* Logout Button (moved to the top) */}
            <TouchableOpacity 
              style={styles.logoutButtonTop} 
              onPress={logout}
              activeOpacity={0.8}
            >
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
      </View>
      
      {/* Scrollable Content Area */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Welcome Section */}
        <View style={styles.welcomeCard}>
            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <Text style={styles.usernameTitle}>{username}</Text>
        </View>

        {/* 2. Curitics Health Section */}
        <View style={styles.companyCard}>
          <Text style={styles.companyTitle}>Curitics Health</Text>
          <Text style={styles.companyTagline}>— {companyInfo.tagline} —</Text>
          
          <Text style={styles.sectionHeader}>Our Focus</Text>
          <Text style={styles.sectionBody}>
            {companyInfo.focus} 
            We do this by making it easy to share data, optimize workflows, and communicate with patients.
          </Text>
          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA', // Light background
  },
  scrollContent: { 
    padding: 20,
    paddingTop: 10,
  },
  // --- Header Bar (Keeps Logout/Icon on top) ---
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: BRAND_COLOR,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // --- Profile Icon/Button ---
  profileButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  profileButtonText: {
    color: '#333',
    fontSize: 18,
    lineHeight: 20,
  },
  // --- Logout Button (Top) ---
  logoutButtonTop: {
    backgroundColor: DANGER_COLOR,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  // --- Welcome Card ---
  welcomeCard: {
    width: '100%',
    padding: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    ...Platform.select({ ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 10 }, android: { elevation: 5 } }),
    alignItems: 'flex-start',
  },
  welcomeText: { 
    fontSize: 18, 
    color: '#555',
    marginBottom: 5,
  },
  usernameTitle: {
    fontSize: 38, 
    fontWeight: "800",
    color: BRAND_COLOR,
  },
  // --- Company Card ---
  companyCard: {
    width: '100%',
    padding: 25,
    borderRadius: 15,
    backgroundColor: ACCENT_COLOR, 
    ...Platform.select({ ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10 }, android: { elevation: 5 } }),
  },
  companyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
    textAlign: 'center',
  },
  companyTagline: {
    fontSize: 15,
    color: '#E0E0E0',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 15,
    marginBottom: 5,
  },
  sectionBody: {
    fontSize: 15,
    color: '#F5F5F5',
    lineHeight: 22,
  },
  // --- Modal Styles (for UserProfileCard) ---
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    ...Platform.select({ ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4 }, android: { elevation: 5 } }),
    width: '85%',
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: BRAND_COLOR,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
    maxWidth: '60%',
  },
  modalCloseButton: {
    marginTop: 30,
    backgroundColor: BRAND_COLOR,
    width: '100%',
  },
  primaryButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});