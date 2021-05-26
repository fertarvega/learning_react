import React, { Component } from 'react'
import Hero from "../../components/Hero"
import "./Login.css"

class Login extends Component {

    render(){
        return(
        <React.Fragment>
            <div className="LoginForm__Main d-flex justify-content-center">
                <div className="LoginForm m-5 flex-column">
                    <div className="LoginForm__icon container">
                        <img src={"https://i.imgur.com/rlKfyAI.png"} alt="" />
                    </div>
                    <form action="" className="container">
                        <div className="LoginForm__inputs">
                            <h5>E-mail:</h5>
                            <input type="text"/>
                            <h5>Password:</h5>
                            <input type="password"/>
                        </div>
                       
                        <a href="" className="LoginForm__forgot">Forgot your password?</a>
                    </form>
                </div>
                <Hero h={"88vh"}></Hero>
            </div>
        </React.Fragment>
        );
    }
}

export default Login;