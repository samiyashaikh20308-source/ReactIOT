// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyC9wbEgsYvz3t0wF5P-EHdyuD7kyUFfljM",
  authDomain: "project1-76b51.firebaseapp.com",
  databaseURL: "https://project1-76b51-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project1-76b51",
  storageBucket: "project1-76b51.firebasestorage.app",
  messagingSenderId: "213250352438",
  appId: "1:213250352438:web:d564ff278df90996077f97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export {database, ref, onValue} 