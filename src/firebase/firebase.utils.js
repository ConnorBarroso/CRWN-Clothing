import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDAIug2_fKlgftjJ_hr-gq6YsmhF_jATrs",
    authDomain: "e-commerce-app-5685d.firebaseapp.com",
    projectId: "e-commerce-app-5685d",
    storageBucket: "e-commerce-app-5685d.appspot.com",
    messagingSenderId: "176352144522",
    appId: "1:176352144522:web:8849896ca33239b0461173",
    measurementId: "G-7B79ER4LQG"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt : 'select_account' })

export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase;