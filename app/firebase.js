// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJYqMWixpmrmsjFATI8z3MBOW697Hyo_s",
  authDomain: "cyberzenix-55ef7.firebaseapp.com",
  projectId: "cyberzenix-55ef7",
  storageBucket: "cyberzenix-55ef7.appspot.com",
  messagingSenderId: "149507289597",
  appId: "1:149507289597:web:ab5568a0d82e2e2a0ca994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);