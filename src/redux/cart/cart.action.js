export const toggleCartHidden = () =>({
    type:'TOGGLE_CART_HIDDEN',
    
})

export const addItemToCart = (item) =>({
    type:'ADDTO_CART',
    payload:item
})