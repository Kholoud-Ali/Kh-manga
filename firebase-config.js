// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYw9gtJQrHvDKGNV5TroBr0H9I3dPAw0Q",
  authDomain: "kh-manga.firebaseapp.com",
  projectId: "kh-manga",
  storageBucket: "kh-manga.appspot.com",
  messagingSenderId: "976404474089",
  appId: "1:976404474089:web:dacfb12fe29b40cad6e878",
  measurementId: "G-FXJ27GMDRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
