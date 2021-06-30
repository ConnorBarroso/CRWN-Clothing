import React from 'react'
import { useSelector } from 'react-redux'
import CustomButton from './custom-button.component'
import CartItem from './cart-item.component'
import './component-styles/cart-dropdown.styles.scss'

const CartDropdown = () =>{
    const items = useSelector((state) => state.cart.cartItems)
    
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    items.map(items => <CartItem key={ items.id } item = {items}/>)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;