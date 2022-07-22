// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyC-cKf1p4yYgfYOFMG4j7wcUt95e85yLX0",
  authDomain: "internshala-outshade-ecommance.firebaseapp.com",
  projectId: "internshala-outshade-ecommance",
  storageBucket: "internshala-outshade-ecommance.appspot.com",
  messagingSenderId: "423816321681",
  appId: "1:423816321681:web:4257dc5eafeedf68b3fd30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;