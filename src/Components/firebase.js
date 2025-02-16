import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP8A28rW-9bT-Ckd5LsUsG7UYb0dWnvAw",
  authDomain: "klu-bus.firebaseapp.com",
  projectId: "klu-bus",
  storageBucket: "klu-bus.firebasestorage.app",
  messagingSenderId: "538100107159",
  appId: "1:538100107159:web:36f322edea2a695907a6d2",
  measurementId: "G-CYQ1WXT5D8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();