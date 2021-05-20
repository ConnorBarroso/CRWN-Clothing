import React, { useState, useEffect} from 'react';
import './App.css';
import Homepage from './pages/homepage.component.jsx';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop.component';
import loginRegister from './pages/login-register-page.component';
import Header from './components/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';




function App() {
  let [account, setAccount] = useState(null)//sets up the state, default state is null
    
  //this is where things go wrong
  
  useEffect(() => {//triggers on mount 
    //userAuth is the user Authentication object provided by google
    
     const unsubscribe = auth.onAuthStateChanged(async userAuth =>{//creates an auth state change listener that will be removed by calling the unsubscribe function
      console.log(userAuth)
      
     
      if (userAuth){//checks if the userAuth is not null
        const userRef = await createUserProfileDocument(userAuth);//sets userRef to be the firestore database directory matching userAuth.id, creates one if one does not exist.
        console.log(userRef)
        userRef.onSnapshot(snapshot => {//checks if the snapshot at that directory has changed and will send me a snapshot object
          setAccount({currentUser:{//sets the currentUser value to an object containing the snapshot.id and misc snapshot data
            id:snapshot.id,
            ...snapshot.data()
          } 
        })
        });
        
        
      }else{//if the userAuth IS null set the account to null.
        setAccount(null)
      }
      
    })
    
    return () => {//removing the listener
      unsubscribe();
    }
    
  },)

  return (
    <div > 
      <Header currentUser={account} setAccount={setAccount}/>
      <Switch>
        <Route  exact path='/' component={Homepage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/login' component={loginRegister} />
      </Switch>
      
    </div>
  );
}



export default App;
