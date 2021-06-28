import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'
import * as actions from '../redux/Cart/cart.actions'

import './component-styles/cart-icon.styles.scss'

const CartIcon=()=>{
    const dispatch = useDispatch();
    const { toggleCartHidden } = bindActionCreators(actions, dispatch);
    
   return(
        <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <div className='item-count'>0</div>
        </div>
    )
}

export default CartIcon;