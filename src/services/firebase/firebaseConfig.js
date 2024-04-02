
// import { initializeApp } from "firebase/app";
// //import  { getFirestore} from 'firebase/firestore'
// import  { getFirestore} from 'firebase/firebaseConfig'



// const firebaseConfig = {
//   apiKey: "AIzaSyAOhA21TuK4YM_TmJaRsxtGwr7afVRam-0",
//   authDomain: "backend-bajamar.firebaseapp.com",
//   projectId: "backend-bajamar",
//   storageBucket: "backend-bajamar.appspot.com",
//   messagingSenderId: "235851420527",
//   appId: "1:235851420527:web:df97b550dfc68b9b63ce9a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOhA21TuK4YM_TmJaRsxtGwr7afVRam-0",
  authDomain: "backend-bajamar.firebaseapp.com",
  projectId: "backend-bajamar",
  storageBucket: "backend-bajamar.appspot.com",
  messagingSenderId: "235851420527",
  appId: "1:235851420527:web:df97b550dfc68b9b63ce9a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
