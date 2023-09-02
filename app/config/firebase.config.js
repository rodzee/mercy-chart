// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvKITpJPkoUw2u0sS8qNifksL1AjzIDRA",
    authDomain: "mercy-chart.firebaseapp.com",
    projectId: "mercy-chart",
    storageBucket: "mercy-chart.appspot.com",
    messagingSenderId: "914009742597",
    appId: "1:914009742597:web:4f6074e6b89a1a4bb7eb6c",
    measurementId: "G-QM1BF05RV3"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);

const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(AsyncStorage)
});
// const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIREBASE_DB = getFirestore(FIREBASE_APP);

export { FIREBASE_AUTH, FIREBASE_DB }