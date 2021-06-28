const INITIAL_STATE = {//sets the default state as the state may not be initialized when the reducer is used
    currentUser: null
}

const userReducer = ( state = INITIAL_STATE, action )=> {//uses the current state if there is one, or the initial state if there isnt one.
    switch(action.type){
        case 'SET_CURRENT_USER':
            console.log('user reducer',action.payload)
            return{
                ...state,//returns everything not specified as whatever it was before the function
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer