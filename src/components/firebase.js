// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBqK5O_bf77tDBlsPy4itmR4j8tjq1F0K0",
    authDomain: "clone-practice-f11af.firebaseapp.com",
    projectId: "clone-practice-f11af",
    storageBucket: "clone-practice-f11af.appspot.com",
    messagingSenderId: "183136239864",
    appId: "1:183136239864:web:1b010e3ece0751df72fb0d",
    measurementId: "G-6QT25THEBV"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };