// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  EmailAuthProvider,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";

import { getFirestore, serverTimestamp } from "firebase/firestore";

import AsyncStorage from "@react-native-async-storage/async-storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9yMb5k8CId_DF1TsDqcIFm6BOhyXmukM",
  authDomain: "tinder-clone-5d261.firebaseapp.com",
  projectId: "tinder-clone-5d261",
  storageBucket: "tinder-clone-5d261.appspot.com",
  messagingSenderId: "506516879135",
  appId: "1:506516879135:web:a5a943cfdc45782fb8622a",
  measurementId: "G-5X7ZPS8Y6L",
};

// Initialize Firebase
let app, auth;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (error) {
    console.log("Error initializing app: " + error);
  }
} else {
  app = getApp();
  auth = getAuth(app);
}

const provider = new EmailAuthProvider();
const db = getFirestore();
const timestamp = serverTimestamp();

export { app, auth, provider, db, timestamp };
