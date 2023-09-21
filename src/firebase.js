// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_nK-7pBUmfjED1NTzUzA28qWDWZhQD1I",
  authDomain: "imagegalleryapp-5d7e0.firebaseapp.com",
  projectId: "imagegalleryapp-5d7e0",
  storageBucket: "imagegalleryapp-5d7e0.appspot.com",
  messagingSenderId: "801066026124",
  appId: "1:801066026124:web:26e30d8a0bc2d8f953a7a9",
  measurementId: "G-HW96FTEZ9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
