// firebase.js
import {firebase,getApps,initializeApp} from 'firebase/app';
import 'firebase/auth';
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9yvzDGl6yLRFNZbvfj-7-n3FqMWH3COs",
  authDomain: "mail-signature-b08e1.firebaseapp.com",
  projectId: "mail-signature-b08e1",
  storageBucket: "mail-signature-b08e1.appspot.com",
  messagingSenderId: "471124122203",
  appId: "1:471124122203:web:3620743b904474510dfd7e",
  measurementId: "G-XCDBEXETH8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
