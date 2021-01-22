import React from 'react';

import './App.css';
import Homepage from "./page/homepage/homepage"
import {Route,Switch} from 'react-router-dom'

const Hatspage = () =>{
  return(
    <div>
      <h1>Hat Page</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
   <Route exact path= "/" component={Homepage} />
   <Route path="/hats" component={Hatspage} />
   </Switch>
     
    </div>
  );
}

export default App;
