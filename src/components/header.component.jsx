import React from 'react';
import { Link } from 'react-router-dom'
import './component-styles/header.styles.scss';
import { ReactComponent as Logo} from  '../assets/crown.svg'
import { auth } from '../firebase/firebase.utils'


const Header = ({ currentUser }) =>(
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT US</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}> LOG OUT</div>
                :
                <Link className='option' to='/login'>LOG IN</Link>
            }
        </div>
    </div>
)

export default Header;