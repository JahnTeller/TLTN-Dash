// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDKGktQPT3McowMw-GXnRsLx54YqcVjc1Y",
  authDomain: "next-ecom-d3e30.firebaseapp.com",
  projectId: "next-ecom-d3e30",
  storageBucket: "next-ecom-d3e30.appspot.com",
  messagingSenderId: "542628569844",
  appId: "1:542628569844:web:65665b88b32b8dcc5274a1",
  measurementId: "G-6LF3QX4C8K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(app);
