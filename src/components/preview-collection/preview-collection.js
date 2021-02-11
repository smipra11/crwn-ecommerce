import React from 'react'
import "./preview-collection.scss"
import CollectionItem from "../collection-item/collection-item"


const CollectPreview = ({title,items}) =>{
    return(
        
        
        <div className="collection-preview">
         
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className= "preview">
                {items.filter((item,idx) =>idx <4)
                
               . map((item) =>(
                    //<div key={item.id}>{item.name} </div>
                    <CollectionItem  key= {item.id}item ={item}/>
                ))}
            </div>

        </div>
    )
}

export default CollectPreview