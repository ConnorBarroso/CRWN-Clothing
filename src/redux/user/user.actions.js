export const setCurrentUser = user => {
    console.log('user action',user)
    return({
    type: 'SET_CURRENT_USER',
    payload: user
})}