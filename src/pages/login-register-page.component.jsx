import React from 'react';
import './page-styles/login-register-page.styles.scss';
import Login from '../components/login.component.jsx';
import Signup from '../components/sign-up.component';

const loginRegister =() =>(
    <div className= 'login-register'>
        <Login/>
        <Signup/>
    </div>
)

export default loginRegister;