import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {//config copied from the firebase SDK snippet available on the firebase site.
    apiKey: "AIzaSyDAIug2_fKlgftjJ_hr-gq6YsmhF_jATrs",
    authDomain: "e-commerce-app-5685d.firebaseapp.com",
    projectId: "e-commerce-app-5685d",
    storageBucket: "e-commerce-app-5685d.appspot.com",
    messagingSenderId: "176352144522",
    appId: "1:176352144522:web:8849896ca33239b0461173",
    measurementId: "G-7B79ER4LQG"
  }




firebase.initializeApp(config);

export const auth = firebase.auth();//exports the .auth functionality as auth
export const firestore = firebase.firestore();//exports the .firestore functionality as firestore

const provider = new firebase.auth.GoogleAuthProvider();//gives access to the googleAuthProvider class from the authentication library as provider

provider.setCustomParameters({ prompt : 'select_account' })//sets a custom parameter to trigger the google popup whenever GoogleAuthProvider is used for authentication or signin

export const signInWithGoogle = ()=> auth.signInWithPopup(provider)//exports the signInWithGoogle function that accesses the google popup from the auth library.



export const createUserProfileDocument = async (userAuth, additionalData) =>{//takes userAuth object and stores it in firebase database

  if (!userAuth) return;//if the userAuth object does not exist return
  
  //if there is a user auth the following triggers
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);//sets userRef to be the firestore data directory
  
  
  const snapshot = await userRef.get();//retrieves a snapshot of the firestore data at that directory if any
  
  if(!snapshot.exists){//if no snapshot exists build one
    const { displayName, email} = userAuth//takes the email and displayName from the userAuth and makes consts
    
    const createdAT = new Date();//sets the date of build
  
    try{//attempts to save this new data at that directory
      await userRef.set({
        displayName,
        email,
        createdAT,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
    
  }
  return userRef;//if there is a snapshot returns with that firebase directory
  
  
  }


  export default firebase;