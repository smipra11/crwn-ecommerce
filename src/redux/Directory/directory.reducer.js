
import hat from "../../assets/hat.jpg"
import mens from "../../assets/mens.jpg"
import women from "../../assets/women.jpg"
const INITIAL_STATE ={
    sections:[
        {
            title: 'hats',
            imageUrl: hat,
            id: 1,
            linkUrl: 'shop/hats',
            
          },
          {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
          },
          {
            title: 'womens',
            imageUrl: women,
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens',
            
          },
          {
            title: 'mens',
            imageUrl: mens,
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          }
    ]
}

const DirectoryReducer  = (state= INITIAL_STATE,action) =>{
    switch(action.type){
        default:
            return state
    }

}

export default DirectoryReducer