// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
//import * as firebase from "firebase/compat/app";

import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe_Xat_fgRHdjac1x-DbaoLiI18t8A7n4",
  authDomain: "password-manager-d0123.firebaseapp.com",
  projectId: "password-manager-d0123",
  storageBucket: "password-manager-d0123.appspot.com",
  messagingSenderId: "266065408828",
  appId: "1:266065408828:web:81a97c37766825e3322439",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const storage = firebase.storage();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const db = firebase.firestore();
export const datbase = {
  users: db.collection("users"),
};
//D:\Ritik dubey\Projects\passwordStorage\password-storage-app\src\Fire.js
