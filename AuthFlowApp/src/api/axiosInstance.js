import axios from "axios";
import { Platform } from "react-native";

const LOCAL_IP = "101.16.22.22"; // 👈 replace with your PC IP

const baseURL =
  Platform.OS === "android" || Platform.OS === "ios"
    ? `http://${LOCAL_IP}:5000`
    : "http://localhost:5000";

export default axios.create({ baseURL });
