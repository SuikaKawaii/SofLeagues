import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { google } from "../../firebase/firebaseConfig";
import { types } from "../types/types"

//----------Login Google------------
export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({user}) => {
            console.log(user.displayName);
            dispatch(loginSyn(user.uid, user.displayName))
            console.log(`Bienvenido ${user.displayName}`);
        }).catch(error => {
            console.log(error);
        })
    }
}
//------------Login Asincrono------------
export const loginAsyn = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(loginSyn(user.uid, user.displayName))
            console.log(`Bienvenido ${user.displayName}`);
        }).catch(error => {
            console.log(error);
            console.log('El usuario no existe');
            
        })
    }
}
//--------------Login Sincrono-------------
export const loginSyn = (id, displayname) => {
    return{
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}
//---------------Logout Asincrono-------------
export const logoutAsyn = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
        .then(user => {
            dispatch(logoutSyn())
        }).catch(error => console.log(error))
    }
}
//----------------Logout Sincrono--------------
export const logoutSyn = () => {
    return {
        type: types.logout
    }
}