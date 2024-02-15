
import { initializeApp } from "firebase/app";



// import APIKEY from .env
const APIKEY = process.env.APIKEY;

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

