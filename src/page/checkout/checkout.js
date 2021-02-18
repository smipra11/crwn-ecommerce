import React from 'react'
import "./checkout.scss"
import { connect } from "react-redux"
import { selectCartItems } from "../../redux/cart/cart.selector"
import { createStructuredSelector } from "reselect"
import { selctCartTotal } from "../../redux/cart/cart.selector"
import CheckoutItem from "../../components/checkout-item/checkout-item"
import CartItem from '../../components/cart-item/cart-item'

const Checkout = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>

                </div>
                <div className="header-block">
                    <span>Description</span>

                </div>
                <div className="header-block">
                    <span>Quantity</span>

                </div>
                <div className="header-block">
                    <span>Price</span>

                </div>
                <div className="header-block">
                    <span>Remove</span>

                </div>


            </div>
            {cartItems.map(cartItem =>(<CheckoutItem  key= {cartItem.id} cartItem ={cartItem}/>))}

            <div className="total">
                total: {total}

            </div>
        </div>
    )
}

const mapStateToProp = createStructuredSelector({
    cartItems: selectCartItems,
    total: selctCartTotal
})
export default connect(mapStateToProp)(Checkout)
