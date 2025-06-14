// Import necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI6gpoEXWSvnJKpDeQ5WACKGF1n2QYaBs",
  authDomain: "blocrealty-36262.firebaseapp.com",
  projectId: "blocrealty-36262",
  storageBucket: "blocrealty-36262.firebasestorage.app",
  messagingSenderId: "413326507792",
  appId: "1:413326507792:web:76e32a0a79ee4a71a0af95",
  measurementId: "G-R1JZQ24NL7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
