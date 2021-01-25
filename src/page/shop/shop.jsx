import React from 'react'

import SHOP_DATA from "../shop/shop-data"
import CollectPreview from "../../components/preview-collection/preview-collection"

class ShopPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            collections :SHOP_DATA
            
        }

    }

    render(){
        return(
           <div className='shop-page'>
               {this.state.collections.map(collection =>(
                   <CollectPreview title={collection.title} items ={collection.items}/>
               ))}
            </div>
        )
    }
}
export default ShopPage