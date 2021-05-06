import React, { useState } from 'react';
import './component-styles/login.styles.scss';
import FormInput from './form-input.component'

function Login(){
    let [email, setEmail] = useState('')
    
    let [password, setPassword] = useState('')

    function onSubmit(e){
        e.preventDefault();
        const userData = {
            email, password
        }

        console.log(userData)
    }
   
        
    return(
        <div className='login'>
            <h2>I already have an account</h2>
            <div>Login with your email and password</div>
            
            <form onSubmit={onSubmit}>
                <FormInput label= 'Email' name='email' type='email' value={email} setUserData={setEmail}/>
        
                <FormInput label= 'Password' name='password' type='password' value={password} setUserData={setPassword}/>
                
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default Login;