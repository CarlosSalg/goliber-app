// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnOaMzH5SDTpWAl5XA5xBhht6qzmYSdd0",
  authDomain: "recapp-4f695.firebaseapp.com",
  projectId: "recapp-4f695",
  storageBucket: "recapp-4f695.appspot.com",
  messagingSenderId: "194381626758",
  appId: "1:194381626758:web:ea56bbe6f21123e6384007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  auth,
  db
}
