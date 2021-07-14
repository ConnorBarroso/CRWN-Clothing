import React, { useEffect } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';

import './App.css';

import Homepage from './pages/homepage.component.jsx';
import ShopPage from './pages/shop.component';
import LoginRegister from './pages/login-register-page.component';
import Header from './components/header.component';
import CheckoutPage from './pages/checkout-page.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selector';

import * as actions from './redux/user/user.actions'






function App() {
  const currentUser = useSelector(selectCurrentUser)

  const dispatch = useDispatch()

  const { setCurrentUser } = bindActionCreators(actions, dispatch)

  useEffect(() => {//triggers on mount 

     
  //userAuth is the user Authentication object provided by google
     const unsubscribe = auth.onAuthStateChanged(async userAuth =>{//creates an auth state change listener that will be removed by calling the unsubscribe function
     
      if (userAuth){//checks if the userAuth is not null
        const userRef = await createUserProfileDocument(userAuth);//sets userRef to be the firestore database directory matching userAuth.id, creates one if one does not exist.
        userRef.onSnapshot(snapshot => {   //checks if the snapshot at that directory has changed and will send me a snapshot object
          /*console.log('set current user',{
            id:snapshot.id,
            ...snapshot.data()
          } )*/
          setCurrentUser({//sets the currentUser value to an object containing the snapshot.id and misc snapshot data
            id:snapshot.id,
            ...snapshot.data()
          } 
        )
        });
        
        
      }else{//if the userAuth IS null set the account to null.
        setCurrentUser(null)
      }
      
    })
    
    return unsubscribe
    
  },[setCurrentUser])

  return (
    <div > 
      <Header/>
      <Switch>
        <Route  exact path='/' component={Homepage} />
        <Route   path='/shop' component={ShopPage} />
        <Route  exact path='/checkout' component={CheckoutPage} />
        <Route  exact path='/login' render={()=> currentUser ? (<Redirect to ='/'/>) : (<LoginRegister/>)} />
      </Switch>
      
    </div>
  );
}

/*<Route  exact path='/login' component={LoginRegister}/>*/ 
/*<Route  exact path='/login' render={()=> currentUser ? (<Redirect to ='/'/>) : (<LoginRegister/>)} />*/ 
export default App
