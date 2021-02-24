import React from 'react'




import CollectPreview from "../../components/preview-collection/preview-collection"
import CollectionOverview from "../../components/collections-overview/collection-overview"
import {Route } from 'react-router-dom'
import Collection from "../Collection/collection"


const  ShopPage = ({match}) =>{

    
        return(
           <div className='shop-page'>
               <Route exact path ={`${match.path}`} component ={CollectionOverview}/>
               <Route path={`${match.path}/:collectionId`} component={Collection} />
              
              
            </div>
        )
    
}


export default ShopPage