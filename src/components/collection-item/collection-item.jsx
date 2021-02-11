import React from 'react'

import "./collection-item.scss"
import CustomButton from '../custom-button/custom-button'
import {connect} from 'react-redux'
import {addItemToCart} from "../../redux/cart/cart.action"

const CollectionItem = ({ item ,addItemToCart}) => {
    const{id,name,price,imageUrl} =item
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={()=>addItemToCart(item)}>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProp = dispatch =>({
    addItemToCart: item => dispatch(addItemToCart(item))
})
export default  connect(null,mapDispatchToProp)(CollectionItem)