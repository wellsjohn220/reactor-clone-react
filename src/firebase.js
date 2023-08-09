// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuZGZCz291MzHeDfgi0v44TeWKrEU23ns",
  authDomain: "realtor-clone-react-e83ac.firebaseapp.com",
  projectId: "realtor-clone-react-e83ac",
  storageBucket: "realtor-clone-react-e83ac.appspot.com",
  messagingSenderId: "735098335230",
  appId: "1:735098335230:web:4de1257eed27452367daaf"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()