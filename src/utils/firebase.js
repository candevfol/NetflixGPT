// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBALAfPqJqHLlTOSsTooK9yEVPyB47qQJc",
  authDomain: "netflixgpt-ee58e.firebaseapp.com",
  projectId: "netflixgpt-ee58e",
  storageBucket: "netflixgpt-ee58e.appspot.com",
  messagingSenderId: "918443330856",
  appId: "1:918443330856:web:15c7827abac05254c8d41d",
  measurementId: "G-JHNLY95584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();