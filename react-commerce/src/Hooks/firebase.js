import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCERgFqipbqZGzFrqeri8XPipggSCZzfGo",
  authDomain: "react-commerce-9799c.firebaseapp.com",
  projectId: "react-commerce-9799c",
  databaseURL: "https://react-commerce-9799c-default-rtdb.firebaseio.com",
  storageBucket: "react-commerce-9799c.appspot.com",
  messagingSenderId: "1068271637855",
  appId: "1:1068271637855:web:5a4463bc346b90a36912ea",
  measurementId: "G-SHJEZGM1JP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const db = getFirestore(app);
export { auth, googleProvider };
export default getFirestore();
