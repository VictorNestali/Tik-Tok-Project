import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCpfMyYTEigKcH6sg-X8XT-AD4AYrM5xAM",
  authDomain: "tiktok---jornada-f6cfe.firebaseapp.com",
  projectId: "tiktok---jornada-f6cfe",
  storageBucket: "tiktok---jornada-f6cfe.appspot.com",
  messagingSenderId: "67601174805",
  appId: "1:67601174805:web:b6b4065ec1f1b05b9dd91c",
  measurementId: "G-CTRPM9GESD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;