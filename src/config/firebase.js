// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGPyLEpEafKI-W5uklq1dnJ8GA3SvVVvo",
  authDomain: "proyecto-react-ruffino.firebaseapp.com",
  projectId: "proyecto-react-ruffino",
  storageBucket: "proyecto-react-ruffino.firebasestorage.app",
  messagingSenderId: "851807964369",
  appId: "1:851807964369:web:e5bfea8963f19195cf09f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);