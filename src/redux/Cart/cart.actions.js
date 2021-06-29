export const toggleCartHidden = () =>({
    type: 'TOGGLE_CART_HIDDEN'  
})

export const addItem = item =>{
    console.log('addItem action', item)
    return({
        type:'ADD_TO_CART',
        payload: item
})
}

export const clearCart = () => ({
    type: 'CLEAR CART'
})
