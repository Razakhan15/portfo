// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAluvZZWYXNFxGbhecVoMJooGzUYe6yL6g",
  authDomain: "portfolio-d9124.firebaseapp.com",
  projectId: "portfolio-d9124",
  storageBucket: "portfolio-d9124.appspot.com",
  messagingSenderId: "1703621551",
  appId: "1:1703621551:web:0db61aaa1ccc58116cf55a",
  measurementId: "G-TD03FZLXCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);