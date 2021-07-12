import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actions from '../redux/Cart/cart.actions'

import './component-styles/checkout-item.styles.scss'

const CheckoutItem= ({cartItem})=> {
    
    const dispatch = useDispatch()
    const { removeCartItem, decrementItem, addItem } = bindActionCreators(actions, dispatch)

    const { name, quantity, price, imageUrl } = cartItem

    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>
                <div className='arrow' onClick={()=> decrementItem(cartItem)}>&#10094;</div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
            </div>
            <div className='price'>{price}</div>
            <div className='remove-button' onClick={()=> removeCartItem(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem