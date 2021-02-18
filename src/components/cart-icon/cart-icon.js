import React from 'react'
import {ReactComponent as ShoppinIcon} from "../../assets/shopping-bag.svg"
import {connect} from 'react-redux'
import './cart-item.scss'
import {toggleCartHidden} from "../../redux/cart/cart.action"
import {selectCartItemsCount} from "../../redux/cart/cart.selector"

const  CartIcon = ({toggleCartHidden,itemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppinIcon className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>
            
        </div>
    )
}

const mapStateToProp =(state ) =>({
    itemCount: selectCartItemsCount(state)
})
const mapDispatchToProp = dispatch =>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default  connect(mapStateToProp,mapDispatchToProp)(CartIcon)
