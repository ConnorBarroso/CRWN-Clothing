import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './component-styles/header.styles.scss';
import { ReactComponent as Logo} from  '../assets/crown.svg'
import { auth } from '../firebase/firebase.utils'
import { selectCurrentUser } from '../redux/user/user.selector';
import { selectCartHidden } from '../redux/Cart/cart.selectors';
import CartIcon from './cart-icon.component';
import CartDropdown from './cart-dropdown.component';





const Header = () =>{

   const  currentUser = useSelector( selectCurrentUser )
   const hidden = useSelector(selectCartHidden)
    
    const signOut=()=>{
        auth.signOut()
        
    }
    
    console.log('header', currentUser)

    return(
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact' >CONTACT US</Link>
            {
                currentUser ?//checks if there is a currentUser
                <div className='option' onClick={signOut}> LOG OUT</div>//if there is a currentUser display logout div with signOut onClick
                :
                <Link className='option' to='/login'>LOG IN</Link>//if there is no currentUser display a link to the log in page 
            }
            <CartIcon/>
            
        </div>
        {
            hidden ? null :
             <CartDropdown/>
        }
    </div>
    )}


export default Header