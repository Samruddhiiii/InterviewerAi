// // Import the functions you need from the SDKs you need
// import { initializeApp , getApp , getApps} from "firebase/app";
// import {getAuth} from "firebase/auth";
// import {getFirestore} from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAggoaRuqXB7ebppvonas7by-XObb6D33E",
//   authDomain: "gcoey-interview-prep.firebaseapp.com",
//   projectId: "gcoey-interview-prep",
//   storageBucket: "gcoey-interview-prep.firebasestorage.app",
//   messagingSenderId: "561233476010",
//   appId: "1:561233476010:web:0f1d852dc681bf26a453d3"
// };

// // Initialize Firebase
// const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

// export const auth = getAuth(app);
// export const db = getFirestore(app);    

// =========================================================================================================

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8W_iZYWrpcaqyxRUEHgKbNbrGcKUNVeY",
  authDomain: "prepwise-af492.firebaseapp.com",
  projectId: "prepwise-af492",
  storageBucket: "prepwise-af492.firebasestorage.app",
  messagingSenderId: "843590984094",
  appId: "1:843590984094:web:78623db9936533aa81368f",
  measurementId: "G-S0CPSVPW8C"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);    
const analytics = getAnalytics(app);