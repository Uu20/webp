// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// 羊毛毛
// const firebaseConfig = {
//   apiKey: "AIzaSyD0_cMB7x7pYTAsjBDjXtRcJq91SZODdLA",
//   authDomain: "insta-d70ee.firebaseapp.com",
//   projectId: "insta-d70ee",
//   storageBucket: "insta-d70ee.appspot.com",
//   messagingSenderId: "920831290200",
//   appId: "1:920831290200:web:0d1269f76b0c1d6afb132d"
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_YMLYiQ_Ba0Y6TVoCJ2wqvIoBAAc42NM",
  authDomain: "watercowmoomoo.firebaseapp.com",
  projectId: "watercowmoomoo",
  storageBucket: "watercowmoomoo.appspot.com",
  messagingSenderId: "646664006352",
  appId: "1:646664006352:web:23ea4fbb2d818210a20cd5",
  measurementId: "G-5NVG6MGFSK"
};



// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };