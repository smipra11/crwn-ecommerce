import React from 'react'
import FormInput from "../../components/form-input/form-input"
import "./sign.scss"
import CustomButton from "../../components/custom-button/custom-button"
import {auth} from "../../firebase/firebase.utils"

import { signInWithGoogle } from "../../firebase/firebase.utils"
class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''


        }
    }

    handleSubmit =  async(event) => {

        event.preventDefault();
         const{email,password} = this.state

         try {
             await auth.signInWithEmailAndPassword(email,password)
             this.setState({email:'',password:''})
             
         } catch (error) {
             console.log(error)
             
         }


    }
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })

    }


    render() {


        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign it  with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="email" type="email" value={this.state.email} required handleChange={this.handleChange} />


                    <FormInput name="password" label="password" type="password" value={this.state.password} required onChange={this.handleChange} />
                    <div className="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>

            </div>

        )
    }
}

export default SignIn