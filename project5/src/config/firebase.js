// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsbISYFOahmTvJupRnM4XtHLvCN4YNx-A",
  authDomain: "vite-contact-bd9d2.firebaseapp.com",
  projectId: "vite-contact-bd9d2",
  storageBucket: "vite-contact-bd9d2.appspot.com",
  messagingSenderId: "120806980972",
  appId: "1:120806980972:web:e0bd981ee04095bbc34749"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);