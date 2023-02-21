import { GoogleAuthProvider, signOut, signInWithPopup } from "firebase/auth";
import { types } from '../types/types';
import { auth } from "../firebase/firebase-config";
import { newUser } from "../helpers/user-helper";

export const startLogin = (  ) => {
    return async ( dispatch ) => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(async (result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            dispatch( login( user.uid, user.displayName, user.email, user.photoURL, token ) )
            await newUser( user.uid, user.displayName, user.email, user.photoURL, )
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({errorCode, errorMessage})
        });
    }
}

export const login = ( uid, displayName, email, photoURL, token ) => {
    localStorage.setItem( 'token', token )
    return {
        type: types.login,
        payload: {
            uid, displayName, email, photoURL, token
        }
    }
}

export const startLogout = () => {    
    return async ( dispatch ) => {
        signOut(auth).then(() => {
            dispatch( logout() )
        }).catch((error) => {
            console.log(error)
        });
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    return {
        type: types.logout,
    }
}
