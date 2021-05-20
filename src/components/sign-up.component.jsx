import React, {useState} from 'react'

import FormInput from './form-input.component'
import CustomButton from './custom-button.component'

import { auth, createUserProfileDocument } from '../firebase/firebase.utils'

import './component-styles/sign-up.styles.scss'

function SignUp(){
    let [displayName, setDisplayName]= useState('')
    let [email, setEmail]= useState('')
    let [password, setPassword]= useState('')
    let [confirmPassword, setConfirmPassword]= useState('')

    const handleSubmit = async event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert('Passwords do not match.')
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);     

            await createUserProfileDocument(user, { displayName })
            
            setDisplayName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')

        }catch (error) {
            console.error(error)

        }
    }

    return(

        
        
        <div className='sign-up'>
            <h2 className='title'>I don't have an account</h2>
            <div>Sign Up with email and password</div>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type ='text'
                    name='displayName'
                    value={displayName}
                    onChange={e=>setDisplayName(e.target.value)}
                    label='Display Name'
                    required
                    />               
                <FormInput type ='email'
                    name='email'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    label='Email'
                    required
                />
                <FormInput type ='password'
                    name='password'
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    label='Password'
                    required
                />
                <FormInput type ='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={e=>setConfirmPassword(e.target.value)}
                    label='Confirm Password'
                    required
                />
                
              <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp