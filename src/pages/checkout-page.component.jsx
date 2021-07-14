import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../redux/Cart/cart.selectors'

import StripeCheckoutButton from '../components/stripe-button.component'
import CheckoutItem from '../components/checkout-item.component'
import './page-styles/checkout.styles.scss'

const CheckoutPage = ()=>{

    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectCartTotal)

   return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <div>Product</div>
                </div>

                <div className='header-block'>
                    <div>Description</div>
                </div>

                <div className='header-block'>
                    <div>Quantity</div>
                </div>

                <div className='header-block'>
                    <div>Price</div>
                </div>

                <div className='header-block'>
                    <div>Remove</div>
                </div>    
            </div>
            {
                cartItems.map(cartItem =>
                    <CheckoutItem cartItem={cartItem}/>
                )
            }

            <div className='total'>TOTAL: ${total}</div>
            <StripeCheckoutButton price={total}/>
            <h1 className='warning'>USE THE FOLLOWING NUMBER FOR CREDIT CARD </h1>
            <h1 className='warning'>4242 4242 4242 4242-exp:01/30-cw:123</h1>
        </div>
    )
}

export default CheckoutPage;