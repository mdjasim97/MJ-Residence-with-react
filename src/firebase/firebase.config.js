// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqxUBW9DRszsqgq-D_NQDzwXCHLOijqUQ",
    authDomain: "mj-residential.firebaseapp.com",
    projectId: "mj-residential",
    storageBucket: "mj-residential.appspot.com",
    messagingSenderId: "947017073233",
    appId: "1:947017073233:web:6e0b8870f82a9ce0a5ae70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth