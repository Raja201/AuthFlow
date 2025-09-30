import AsyncStorage from "@react-native-async-storage/async-storage";

// Save data
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Error saving data:", e);
  }
};

// Get data
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error("Error reading data:", e);
    return null;
  }
};

// Remove data
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error("Error removing data:", e);
  }
};
