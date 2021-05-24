import React, { Component } from 'react'
import "./Login.css"

class Login extends Component {

    render(){
        return(
        <React.Fragment>
            <div className="LoginForm m-5 flex-column">
                <div className="LoginForm__icon container">
                    <img src={"https://cdn2.iconfinder.com/data/icons/round-set-vol-2/120/gamepad-512.png"} alt="" />
                </div>
                <form action="" className="LoginForm__inputs container">
                    <h2>E-mail:</h2>
                    <input type="text" className=" form-control" />
                    <h2>Password:</h2>
                    <input type="password" className=" form-control" />
                </form>
            </div>
        </React.Fragment>
        );
    }
}

export default Login;