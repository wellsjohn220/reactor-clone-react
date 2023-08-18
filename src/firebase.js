// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// using firebase login by windsorjohn220@gmail.com

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwDRuUSL-2gEmppCTPFkziyBqZ76eGnJ4",
  authDomain: "reactor-clone-react.firebaseapp.com",
  projectId: "reactor-clone-react",
  storageBucket: "reactor-clone-react.appspot.com",
  messagingSenderId: "419561638588",
  appId: "1:419561638588:web:9b78f345f904bb98689eb9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()