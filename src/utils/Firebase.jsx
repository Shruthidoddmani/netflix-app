// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZSD39urgy3AX6L1K4EME7W7-uWI7a9Os",
  authDomain: "netflixgpt-19b87.firebaseapp.com",
  projectId: "netflixgpt-19b87",
  storageBucket: "netflixgpt-19b87.firebasestorage.app",
  messagingSenderId: "455564383143",
  appId: "1:455564383143:web:9a08e50059c1b9a08f9c82",
  measurementId: "G-ZVFWE90L4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();