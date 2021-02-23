import React from 'react'
import "./checkout-item.scss"
import {connect} from 'react-redux'
import {clearItemFromCart} from "../../redux/cart/cart.action"
import {RemoveItem} from "../../redux/cart/cart.action"
import {addItemToCart} from "../../redux/cart/cart.action"


const  CheckoutItem =( {cartItem,clearItem,addItemToCart,RemoveItem})  =>{

    const {name,imageUrl,price,quantity} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src ={imageUrl}alt="item"/>

            </div>
            <span className="name">{name}</span>
         
    <span className="quantity">
    <div className="arrow" onClick ={()=>RemoveItem(cartItem)}> &#10094;</div>
    <span className="value">{quantity}</span>
    <div className="arrow" onClick ={()=>addItemToCart(cartItem)}> &#10095;</div>
    </span>
   
    <span className="price">{price}</span>
       <div className="remove-button" onClick ={()=>clearItem(cartItem)}> &#10005;</div>
         
      
            
        </div>
    )
}
const mapDispatchToProp = dispatch =>({
  clearItem: (item) =>dispatch(clearItemFromCart(item)),
  addItemToCart:(item) =>dispatch(addItemToCart(item)),
  RemoveItem:(item ) =>dispatch(RemoveItem(item))

})
export default connect(null,mapDispatchToProp)(CheckoutItem)
