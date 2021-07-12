import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../redux/Cart/cart.selectors'
import { withRouter } from 'react-router-dom' 
import CustomButton from './custom-button.component'
import CartItem from './cart-item.component'
import './component-styles/cart-dropdown.styles.scss'

const CartDropdown = ({history}) =>{
    const items = useSelector(selectCartItems)
    
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    items.length ? (
                    items.map(items => <CartItem key={ items.id } item = {items}/>)
                    ) :
                    <div className='empty-message'>Your cart is empty</div>
                }
            </div>
            <CustomButton onClick={()=> history.push('/checkout')} >GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default withRouter(CartDropdown);