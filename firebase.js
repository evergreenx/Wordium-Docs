// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuPXHjXbIrxHHJxOCOYgo5xnqeThRRDFk",
  authDomain: "firegal-be39a.firebaseapp.com",
  databaseURL: "https://firegal-be39a.firebaseio.com",
  projectId: "firegal-be39a",
  storageBucket: "firegal-be39a.appspot.com",
  messagingSenderId: "526376722562",
  appId: "1:526376722562:web:a1646ef48c1797a4bf549b",
  measurementId: "G-ERSLQJEKFS",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? initializeApp(firebaseConfig)
  : firebase.app();
const analytics = getAnalytics(app);

const db = app.firestore();


export { db };