// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLMLvuFqmFO0JuDyneXA86SQp3z7HpQtU",
  authDomain: "insta-2-59f91.firebaseapp.com",
  projectId: "insta-2-59f91",
  storageBucket: "insta-2-59f91.appspot.com",
  messagingSenderId: "119040854909",
  appId: "1:119040854909:web:7536c9d235e2700746da14",
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db =getFirestore();
const storage =getStorage();

export { app, db, storage};