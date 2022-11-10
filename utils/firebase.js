// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "message-board-b1dd3.firebaseapp.com",
  projectId: "message-board-b1dd3",
  storageBucket: "message-board-b1dd3.appspot.com",
  messagingSenderId: "22248046659",
  appId: "1:22248046659:web:94fa9bd0a6aa7b0cfbd4f6",
  measurementId: "G-HYL63W3HWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);