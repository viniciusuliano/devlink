import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC2e_i952CeKF7fs5znyu4Uo11fH1b-gvg",
  authDomain: "devlink-e3993.firebaseapp.com",
  projectId: "devlink-e3993",
  storageBucket: "devlink-e3993.appspot.com",
  messagingSenderId: "1089447042506",
  appId: "1:1089447042506:web:7fa81fa216e22163f8c333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}