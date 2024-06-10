// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtz1EGp85ygYPcUd12m2nHwILxcztI6B0",
  authDomain: "nerd-202e5.firebaseapp.com",
  projectId: "nerd-202e5",
  storageBucket: "nerd-202e5.appspot.com",
  messagingSenderId: "616560504639",
  appId: "1:616560504639:web:e64f00b1a0cd2a6195ed8a",
  measurementId: "G-BKC5KT9YBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);
