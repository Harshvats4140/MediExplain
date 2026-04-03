// Import Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase config (copy from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyDQbJmDf5ZzJGvbFU9YLBHr4pB4CBUzqTU",
  authDomain: "mediexplainai.firebaseapp.com",
  projectId: "mediexplainai",
  storageBucket: "mediexplainai.firebasestorage.app",
  messagingSenderId: "517627036296",
  appId: "1:517627036296:web:b859cac2eb9fad0a41953d",
  measurementId: "G-XTN5L4JEDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

// Export so you can use anywhere
export { db, auth };
