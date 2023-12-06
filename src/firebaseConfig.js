// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLUhnNxDEzFdLpI3ctsGgGsoECdJGY6jI",
    authDomain: "trivia-85698.firebaseapp.com",
    databaseURL: "https://trivia-85698-default-rtdb.firebaseio.com",
    projectId: "trivia-85698",
    storageBucket: "trivia-85698.appspot.com",
    messagingSenderId: "509952414270",
    appId: "1:509952414270:web:7a64e2409431170972776f",
    measurementId: "G-GQ78Y7YEGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
