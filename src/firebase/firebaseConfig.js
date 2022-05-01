import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB11fpCFW1QHszhayyYVFoKjahIWIMKKGA",
    authDomain: "pruebasofka-21cba.firebaseapp.com",
    projectId: "pruebasofka-21cba",
    storageBucket: "pruebasofka-21cba.appspot.com",
    messagingSenderId: "540204429118",
    appId: "1:540204429118:web:1cda6658481bfa9eb3866f",
    measurementId: "G-EZ4LWWM61B"
  };

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore(app);
  

export {
    app, 
    google,
    db
}