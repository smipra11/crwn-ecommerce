import React from 'react'
import "./cart-dropdown.scss"
import CustomButton from "../custom-button/custom-button"
import CartItem from "../cart-item/cart-item"
import{connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from "../../redux/cart/cart.action"

const CartDropDown =({cartItems,history,dispatch})  =>{
    return (

        <div className="cart-dropdown">
            <div className="cart-items">

               {cartItems.length > 0?(
               cartItems.map(cartItem =>(
                   <CartItem key= {cartItem.id} item ={cartItem}/>
               ))
               ):
               <div className="empty-message">Empty Cart Item </div>
               }

            <CustomButton  
            onClick= {()=>{history.push("/checkout");dispatch(toggleCartHidden())
                 }}>GO TO CHECKOUT</CustomButton>

            </div>
            
            
        </div>
    )
}

const mapStateToProp = (state) =>({
    cartItems:state.cart.cartItems
})




export default withRouter(connect(mapStateToProp )(CartDropDown))
