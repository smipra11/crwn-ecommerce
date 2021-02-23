import React from 'react'
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux'
import CollectPreview from "../preview-collection/preview-collection"
import {selectCollectionItems} from "../../redux/shop/shop.selector"
import "./collections-overview.scss"
const CollectionOverview =({collections})  =>{
    return (
        <div className='collections-overview'>
               {collections.map(collection =>(
                   <CollectPreview title={collection.title} items ={collection.items}/>
               ))}
            </div>
    )
}

const mapStateToProps = createStructuredSelector({
collections:selectCollectionItems
})

export default connect(mapStateToProps)(CollectionOverview)
