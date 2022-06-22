// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB835JfWUAJrtlxkitlkJdNqmCoFDCblSk",
  authDomain: "instagram-4fb01.firebaseapp.com",
  projectId: "instagram-4fb01",
  storageBucket: "instagram-4fb01.appspot.com",
  messagingSenderId: "314608056510",
  appId: "1:314608056510:web:1ac69991b6319b02ec86ef",
  measurementId: "G-F3F0D2M42F"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig):getApp();

// Initialize Firebase
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();


export{app,db , auth , storage};