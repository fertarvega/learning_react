import React, { Component } from 'react'
import Hero from "../../components/Hero"
import "./Register.css"

class Register extends Component {

    render(){
        return(
        <React.Fragment>
            <div className="RegisterForm__Main d-flex justify-content-center">
                <div className="RegisterForm m-5 flex-column">
                    <div className="RegisterForm__icon container">
                        <img src={"https://i.imgur.com/rlKfyAI.png"} alt="" />
                    </div>
                    <form action="" className="container">
                        <div className="RegisterForm__inputs">
                            <h5>E-mail:</h5>
                            <input type="text"/>
                            <h5>Password:</h5>
                            <input type="password"/>
                        </div>
                        <button className="RegisterForm__button">
                            Register
                        </button>
                        <a href="" className="RegisterForm__forgot">Forgot your password?</a>
                    </form>
                </div>
                <Hero h={"88vh"}></Hero>
            </div>
        </React.Fragment>
        );
    }
}

export default Register;