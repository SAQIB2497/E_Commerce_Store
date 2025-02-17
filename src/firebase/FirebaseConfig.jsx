import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-SDvDedpI3l3Zee_F1CiCM2FuTrB825A",
  authDomain: "e-store-2b60a.firebaseapp.com",
  projectId: "e-store-2b60a",
  storageBucket: "e-store-2b60a.firebasestorage.app",
  messagingSenderId: "472276608893",
  appId: "1:472276608893:web:f828adf2865d4dc6910e14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
