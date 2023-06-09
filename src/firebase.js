
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDadnvbPU9vImDZrmhTvWIGB6QTw6-rROM",
  authDomain: "project-26631.firebaseapp.com",
  projectId: "project-26631",
  storageBucket: "project-26631.appspot.com",
  messagingSenderId: "464738241034",
  appId: "1:464738241034:web:c9f1fe1eccbfabee972df3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Sign up Google
const googleProvider = new GoogleAuthProvider();


export { auth, db, googleProvider };