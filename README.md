AuthFlow App

An authentication application built with React Native (Expo) for the frontend and a Node.js/Express server with MongoDB/Mongoose for data persistence.

This project demonstrates a robust, token-based authentication flow (Login / Register / Logout) with a clear separation of concerns between client and server.

🚀 Getting Started
✅ Prerequisites

Make sure the following are installed on your system:

Node.js (LTS)

Expo CLI

npm install -g expo-cli


MongoDB (running locally or a MongoDB Atlas
 connection string)

⚙️ Backend Setup

Navigate to the server directory

cd auth-backend


Install dependencies

npm install


Create a .env file in the server root with the following variables:

MONGO_URI="YOUR_MONGODB_CONNECTION_STRING" 
JWT_SECRET="your_secure_secret_key"
JWT_EXPIRES_IN="1d"


Start the server

npm run dev

📱 Frontend Setup

Navigate to the client directory

cd AuthFlowApp


Install dependencies

npm install


Update API URL
In client/api/axiosInstance.js, set the baseURL to your running server:

baseURL: "http://YOUR_LOCAL_IP:5000"


💡 Replace YOUR_LOCAL_IP with your actual PC IP address.

Start the Expo client

npx expo start


This will open the Metro Bundler. You can run the app on:

Android Emulator

iOS Simulator

Physical device (via the Expo Go app)

🎯 Features

🔐 Secure Login / Register / Logout

⚡ Token-based authentication with JWT

🗄️ MongoDB persistence with Mongoose

📱 Cross-platform mobile app (iOS & Android via Expo)