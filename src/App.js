import React from 'react';

import './App.css';
import Homepage from "./page/homepage/homepage"
import { Route, Switch } from 'react-router-dom'

import ShopPage from "./page/shop/shop"
import Header from "../src/components/header/header"
import SignInandSignUp from "../src/page/SignInandSignUp/SignInandSignUp"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            id: snapshot.id,
            ...snapshot.data()
          },()=>{
            console.log(this.state)
          })
        })

        

      }
      this.setState({currentUser:userAuth})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInandSignUp} />
        </Switch>

      </div>
    );
  }
}

export default App;
