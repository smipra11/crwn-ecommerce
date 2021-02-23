export const toggleCartHidden = () =>({
    type:'TOGGLE_CART_HIDDEN',
    
})

export const addItemToCart = (item) =>({
    type:'ADDTO_CART',
    payload:item
})
export const clearItemFromCart = (item) =>({
    type:'CLEAR_ITEM_FROM_CART',
    payload:item
})

export const RemoveItem = (item) =>({
    type:'REMOVE_ITEM',
    payload:item
})