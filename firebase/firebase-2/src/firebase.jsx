// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxgHY5ed0ysEuYMXAxqUtVS8nrz_hvLmY",
  authDomain: "fir-project-f7e87.firebaseapp.com",
  projectId: "fir-project-f7e87",
  storageBucket: "fir-project-f7e87.firebasestorage.app",
  messagingSenderId: "741314933960",
  appId: "1:741314933960:web:0b7fb28602dda2756761fd",
  measurementId: "G-RCVP5HRVVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);