import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCartItemsCount } from '../redux/Cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'
import * as actions from '../redux/Cart/cart.actions'

import './component-styles/cart-icon.styles.scss'


const CartIcon=()=>{

    const dispatch = useDispatch();
    
    const { toggleCartHidden } = bindActionCreators(actions, dispatch);

    const itemCount = useSelector(selectCartItemsCount)
    
   return(
        <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <div className='item-count'>{itemCount}</div>
        </div>
    )
}

export default CartIcon;