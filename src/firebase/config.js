// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALsqVim2DJizS2EIuGIn9Br4xmGZheJMY",
  authDomain: "studio-calculator.firebaseapp.com",
  projectId: "studio-calculator",
  storageBucket: "studio-calculator.appspot.com",
  messagingSenderId: "659939058659",
  appId: "1:659939058659:web:3a690a639eb9b18a9276d6",
  measurementId: "G-83RHJ05TSR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
