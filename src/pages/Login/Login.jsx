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
                        <img src={"https://cdn2.iconfinder.com/data/icons/round-set-vol-2/120/gamepad-512.png"} alt="" />
                    </div>
                    <form action="" className="LoginForm__inputs container">
                        <h4>E-mail:</h4>
                        <input type="text" className="form-control" />
                        <h4>Password:</h4>
                        <input type="password" className="form-control" />
                    </form>
                </div>
                <Hero h={"88vh"}></Hero>
            </div>
        </React.Fragment>
        );
    }
}

export default Login;