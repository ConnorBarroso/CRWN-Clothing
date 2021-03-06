import React, { useState } from 'react';
import './component-styles/login.styles.scss';
import FormInput from './form-input.component';
import CustomButton from './custom-button.component';
import { auth, signInWithGoogle } from '../firebase/firebase.utils'

function Login(){
    let [email, setEmail] = useState('')
    
    let [password, setPassword] = useState('')

    const onSubmit= async e =>{
        e.preventDefault();
        try{
            await auth.signInWithEmailAndPassword(email, password)
            
            setEmail('')
            setPassword('')
        }catch(error){
            console.log(error)
        }

       
    }
  
        
    return(
        <div className='login'>
            <h2>I already have an account</h2>
            <div>Login with your email and password</div>
            
            <form onSubmit={onSubmit}>
                <FormInput label= 'Email' name='email' type='email' value={email} setUserData={setEmail}/>
        
                <FormInput label= 'Password' name='password' type='password' value={password} setUserData={setPassword}/>
                
                <div className='buttons'>
                <CustomButton type='submit' >Log In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Log In with Google</CustomButton>{/* onclick triggers the signInWithGoogle function declared in firebase.utils */}
                </div>
            </form>
        </div>
    )
}

export default Login;