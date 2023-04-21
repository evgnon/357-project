
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, addDoc, query, getDocs, where, collection } from "firebase/firestore";

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

// FIREBASE AUTH

// Sign up function
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Sign in function
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Sign out function
const logout = () => {
  signOut(auth);
};

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        firstName: user.firstName,
        lastName: user.lastName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { auth, registerWithEmailAndPassword, signInWithEmailAndPassword, logInWithEmailAndPassword, signInWithGoogle, logout };