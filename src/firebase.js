import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAposc5sUDvfhPf5v5Ukm9_bpDcHmaJEUQ",
  authDomain: "chatweb-fdc5e.firebaseapp.com",
  projectId: "chatweb-fdc5e",
  storageBucket: "chatweb-fdc5e.appspot.com",
  messagingSenderId: "1023294102869",
  appId: "1:1023294102869:web:f3989e0338bc774dc523dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

// comand : npm install firebase