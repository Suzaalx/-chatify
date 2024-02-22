
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";






// import APIKEY from .env



const APIKEY= import.meta.env.VITE_ACCESS_KEY;



const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: "chatify-a2cc4.firebaseapp.com",
  projectId: "chatify-a2cc4",
  storageBucket: "chatify-a2cc4.appspot.com",
  messagingSenderId: "175500653872",
  appId: "1:175500653872:web:0fe40677a8de04257f04f5",
  measurementId: "G-2Y9391MLZM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage= getStorage(app);


