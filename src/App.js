import React from 'react';
import {connect} from 'react-redux'

import './App.css';
import Homepage from "./page/homepage/homepage"
import { Route, Switch,Redirect } from 'react-router-dom'

import ShopPage from "./page/shop/shop"
import Header from "../src/components/header/header"
import SignInandSignUp from "../src/page/SignInandSignUp/SignInandSignUp"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import {setCurrentUser} from "./redux/user/user.action"




class App extends React.Component {
  

  unsubscribeFromAuth = null

  componentDidMount() {
    const{setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
          
        })

        

      }
     setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header  />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={()=>this.props.currentUser? (<Redirect to="/"/>): (<SignInandSignUp/>)} />
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = ({user}) =>({
  currentUser:user.currentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
