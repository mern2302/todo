// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZpykNbcizvq6tY1s8vw1apYGKjTUGtH4",
  authDomain: "todo-app-c08a1.firebaseapp.com",
  projectId: "todo-app-c08a1",
  storageBucket: "todo-app-c08a1.appspot.com",
  messagingSenderId: "718291678041",
  appId: "1:718291678041:web:516c8dfed34c9178aad248",
  measurementId: "G-R7VY9J62BW",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default firebaseConfig;
