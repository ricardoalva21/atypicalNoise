
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQfCZzp6BVE43I6v2dW31G37O38UslcX8",
  authDomain: "atypical-noise.firebaseapp.com",
  projectId: "atypical-noise",
  storageBucket: "atypical-noise.firebasestorage.app",
  messagingSenderId: "612044058293",
  appId: "1:612044058293:web:d506a4d3e34a8697b558fc"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export  {app, db, auth};          

