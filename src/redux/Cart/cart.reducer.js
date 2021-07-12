import { addItemToCart, decrementItem } from "./cart.utils"

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch( action.type ){
        case 'TOGGLE_CART_HIDDEN':
            console.log('cart reducer')
            return{
                ...state,
                hidden: !state.hidden //changes state to opposite value
            }
        
        case 'ADD_TO_CART':
            console.log('cart reducer')
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        case 'REMOVE_CART_ITEM':
            return{
               ...state,
               cartItems: state.cartItems.filter(
                   cartItem => cartItem.id !== action.payload.id 
                )
            }
        case 'DECREMENT_ITEM':
            return{
                ...state,
                cartItems: decrementItem(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer