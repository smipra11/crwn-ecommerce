import React from 'react'

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name :'',
            email :'',
            password :''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({name:"",password:"",email:""})

    }

    handleChange = (event ) =>{
        const {value,name} = event.target;
        this.setState({[name]:value})

    }
    render(){
        return(
            <div>
                <h2>I Don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input  name= "name" type="text" value={this.state.name}  onChange ={this.handleChange}/>
                    <lable>Display Name</lable>
                    <input  name= "email" type="email" value={this.state.email}  onChange ={this.handleChange}/>
                    <lable>Email</lable>
                    <input  name= "password" type="password" value={this.state.password}  onChange ={this.handleChange}/>
                    <lable>Password</lable>
                    <input type="submit" value="submit form"/>
                </form>
            </div>
        )
    }
}

export default SignUp