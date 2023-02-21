import { setDoc, doc } from "firebase/firestore"; 
import { db } from "../firebase/firebase-config";

export const newUser = async ( uid, displayName, email, photoURL )=> {

    try {

        await setDoc(doc(db, "users", uid), {
            uid, displayName, email, photoURL
        });

      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
}


