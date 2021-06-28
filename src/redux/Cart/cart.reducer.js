const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch( action.type ){
        case 'TOGGLE_CART_HIDDEN':
            console.log('cart reducer')
            return{
                ...state,
                hidden: !state.hidden //changes state to opposite value
            }
        default:
            return state;
    }
}

export default cartReducer