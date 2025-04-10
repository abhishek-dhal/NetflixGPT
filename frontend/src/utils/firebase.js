// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKJ2Ope0PXr2Q0_Wper0MPn81aUHJhJWU",
  authDomain: "netflixgpt-368e4.firebaseapp.com",
  projectId: "netflixgpt-368e4",
  storageBucket: "netflixgpt-368e4.firebasestorage.app",
  messagingSenderId: "623522201488",
  appId: "1:623522201488:web:714ba383fc1fc1a6f97d15",
  measurementId: "G-C5X1FD944L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();
//console.log(auth);