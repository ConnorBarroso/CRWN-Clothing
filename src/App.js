import React, { useState, useEffect, useMemo} from 'react';
import './App.css';
import Homepage from './pages/homepage.component.jsx'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop.component'



function App() {
  return (
    <div > 
      <Switch>
        <Route  exact path='/' component={Homepage} />
        <Route  path='/shop' component={ShopPage} />
      </Switch>
      
    </div>
  );
}



export default App;
