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
  apiKey: "AIzaSyDLMLvuFqmFO0JuDyneXA86SQp3z7HpQtU",
  authDomain: "insta-2-59f91.firebaseapp.com",
  projectId: "insta-2-59f91",
  storageBucket: "insta-2-59f91.appspot.com",
  messagingSenderId: "119040854909",
  appId: "1:119040854909:web:7536c9d235e2700746da14",
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig):getApp();

// Initialize Firebase
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();


export{app,db , auth , storage};