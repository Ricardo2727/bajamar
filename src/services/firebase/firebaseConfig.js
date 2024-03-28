// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import  { getFirestore} from 'firebase/firestore'




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOhA21TuK4YM_TmJaRsxtGwr7afVRam-0",
  authDomain: "backend-bajamar.firebaseapp.com",
  projectId: "backend-bajamar",
  storageBucket: "backend-bajamar.appspot.com",
  messagingSenderId: "235851420527",
  appId: "1:235851420527:web:df97b550dfc68b9b63ce9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)