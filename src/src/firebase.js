import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhlCHvWcJiYUr5h5lh7KhwoYKE7seBDFI",
  authDomain: "dr-laiba-physio.firebaseapp.com",
  projectId: "dr-laiba-physio",
  storageBucket: "dr-laiba-physio.firebasestorage.app",
  messagingSenderId: "232136049502",
  appId: "1:232136049502:web:a9705cf73ca134ef0f05cf",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);