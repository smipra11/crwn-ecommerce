import React from 'react'
import FormInput from "../../components/form-input/form-input"
import CustomButton from "../../components/custom-button/custom-button"
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils"
import "./SignUp.scss"

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name :'',
            email :'',
            password :'',
            confirmpassword:''
        }
    }

    handleSubmit =  async(e) =>{
        e.preventDefault()
        
        const{name,email,password,confirmpassword} = this.state

        if(password !== confirmpassword){
            alert("Password does not match")
            return;
        }

        try {
            const{user} = await auth.createUserWithEmailAndPassword(
                email,password
            );
            
            await createUserProfileDocument(user,{name})

            this.setState({
                name:'',
                email:'',
                password:'',
                confirmpassword:''
            })
        } catch (error) {
            console.log(error)
            
        }

    }

    handleChange = (event ) =>{
        const {value,name} = event.target;
        this.setState({[name]:value})

    }
    render(){
        const{name,email,password,confirmpassword} = this.state
        return(
            <div className="sign-up">
                <h2 className="title">I Don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form  className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput  name= "name" type="text" value={name}  onChange ={this.handleChange} label="Name" required/>
                    
                    <FormInput name= "email" type="email" value={email}  onChange ={this.handleChange} label="Email" required/>
                  
                    <FormInput  name= "password" type="password" value={password}  onChange ={this.handleChange} label="Password" required/>
                     <FormInput name="confirmpassword" type="password" value={confirmpassword} onChange={this.handleChange} label ="Confirm Password" required/>
                    
                    <CustomButton type="submit" >SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp