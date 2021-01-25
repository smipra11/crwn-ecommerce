import React from 'react';

import './App.css';
import Homepage from "./page/homepage/homepage"
import {Route,Switch} from 'react-router-dom'

import ShopPage from "./page/shop/shop"



function App() {
  return (
    <div className="App">
      <Switch>
   <Route exact path= "/" component={Homepage} />
   <Route path="/shop" component={ShopPage} />
   </Switch>
     
    </div>
  );
}

export default App;
