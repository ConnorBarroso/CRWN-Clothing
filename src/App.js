import React, { useState, useEffect, useMemo} from 'react';
import './App.css';
import Homepage from './pages/homepage.component.jsx';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop.component';
import loginRegister from './pages/login-register-page.component';
import Header from './components/header.component';



function App() {
  return (
    <div > 
      <Header/>
      <Switch>
        <Route  exact path='/' component={Homepage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/login' component={loginRegister} />
      </Switch>
      
    </div>
  );
}



export default App;
