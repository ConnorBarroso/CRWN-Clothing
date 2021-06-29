import { addItemToCart } from "./cart.utils"

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
        case 'CLEAR CART':
            return{
                ...state,
                cartItems:[]
            }
        default:
            return state;
    }
}

export default cartReducer