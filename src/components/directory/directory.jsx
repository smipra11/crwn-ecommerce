import React from 'react'
import MenuItem from "../menu-item/menu-item"
import {connect} from 'react-redux'
import "./directory.scss"
import {selectDirectorySections} from "../../redux/Directory/directory.selector"
import { createStructuredSelector } from 'reselect';

const Directory  = ({sections}) => {
    
        return(
            <div className="directory-menu">

                {sections.map(({title,id,imageUrl,size,linkUrl}) =>{
                    return(
                        <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>

                       
                    )
                })}
                </div>
        )
    

}

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
})

export default  connect(mapStateToProps)(Directory)