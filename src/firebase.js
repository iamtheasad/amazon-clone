import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD1MiGfS2vEwidNrgzG8C1YAqF5RAtF56E",
    authDomain: "clone-3e9c3.firebaseapp.com",
    databaseURL: "https://clone-3e9c3.firebaseio.com",
    projectId: "clone-3e9c3",
    storageBucket: "clone-3e9c3.appspot.com",
    messagingSenderId: "782645067839",
    appId: "1:782645067839:web:ed0bc4a3648fc31008788a",
    measurementId: "G-2PSS1CHWEP",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };

