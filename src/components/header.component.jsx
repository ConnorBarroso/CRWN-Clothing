import React from 'react';
import { Link } from 'react-router-dom'
import './component-styles/header.styles.scss';
import { ReactComponent as Logo} from  '../assets/crown.svg'
import { auth } from '../firebase/firebase.utils'



const Header = ({ currentUser, setAccount }) =>{
    
    function signOut(){
        auth.signOut()
        setAccount(null)
    }
    
    return(
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT US</Link>
            {
                currentUser ?//checks if there is a currentUser
                <div className='option' onClick={signOut}> LOG OUT</div>//if there is a currentUser display logout div with signOut onClick
                :
                <Link className='option' to='/login'>LOG IN</Link>//if there is no currentUser display a link to the log in page 
            }
        </div>
    </div>
    )}




export default Header;