import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkf9ZG4dM1n5SNokqdioQ2kSaVmtWs528",
  authDomain: "chat-734db.firebaseapp.com",
  projectId: "chat-734db",
  storageBucket: "chat-734db.appspot.com",
  messagingSenderId: "679723721702",
  appId: "1:679723721702:web:4f3af2adddba19cc1e6c27",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
