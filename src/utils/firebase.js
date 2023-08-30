// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJJV2MUCPenoy1UPL4q_Xa0JW53D8WVpw",
  authDomain: "netflixgpt-780ee.firebaseapp.com",
  projectId: "netflixgpt-780ee",
  storageBucket: "netflixgpt-780ee.appspot.com",
  messagingSenderId: "420660312038",
  appId: "1:420660312038:web:2b67984a78fe2d97568827",
  measurementId: "G-MBLCH3MHGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
