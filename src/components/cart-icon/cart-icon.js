import React from 'react'
import {ReactComponent as ShoppinIcon} from "../../assets/shopping-bag.svg"
import {connect} from 'react-redux'
import './cart-item.scss'
import {toggleCartHidden} from "../../redux/cart/cart.action"

const  CartIcon = ({toggleCartHidden}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppinIcon className="shopping-icon"/>
            <span className="item-count">0</span>
            
        </div>
    )
}

const mapDispatchToProp = dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default  connect(null,mapDispatchToProp)(CartIcon)
