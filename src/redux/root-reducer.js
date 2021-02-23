import{combineReducers} from 'redux'
import {persistReducer } from 'redux-persist'
import storage from  'redux-persist/lib/storage'

import UserReducer from "./user/user.reducer"
import CartReducer from "./cart/cart.reducer"
import DirectoryReducer from "./Directory/directory.reducer"
import ShopReducer from "./shop/shop.reducer"

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
    whitelist:['cart']
}

const rootReducer  = combineReducers({
    user: UserReducer,
    cart:CartReducer,
    directory:DirectoryReducer,
    shop:ShopReducer


})
export default persistReducer(persistConfig, rootReducer)

