// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTOJG0wIfiL9-iAJc03EaKW9z6ukjYDzw",
  authDomain: "dashboard-1-nextjs.firebaseapp.com",
  projectId: "dashboard-1-nextjs",
  storageBucket: "dashboard-1-nextjs.firebasestorage.app",
  messagingSenderId: "461164845814",
  appId: "1:461164845814:web:20a6385a14f5da806faad7",
  measurementId: "G-E5V1VQV1FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 
export const db = getFirestore(app);