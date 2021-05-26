import React, { Component } from 'react'
import Hero from "../../components/Hero"
import {Link} from "react-router-dom"
import "./Register.css"

class Register extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="RegisterForm__Main d-flex justify-content-center">
                    <div className="RegisterForm m-5 flex-column">
                        <div className="RegisterForm__icon container">
                            <img src={"https://i.imgur.com/rlKfyAI.png"} alt="" />
                        </div>
                        <form action="" className="container">
                            <div className="RegisterForm__inputs">
                                <div className="row">
                                    <div className="col">
                                        <h5>Name:</h5>
                                        <input type="text" />
                                        <h5>E-mail:</h5>
                                        <input type="text" />
                                        <h5>Password:</h5>
                                        <input type="password" />
                                        <h5>Confirm Password:</h5>
                                        <input type="password" />
                                    </div>
                                    <div className="col">
                                        <h5>Profile Picture URL:</h5>
                                        <input type="text" />
                                        <h5>Header Picture URL:</h5>
                                        <input type="text" />
                                        <h5>Age:</h5>
                                        <input type="number" />
                                        <h5>City:</h5>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <Link className="Linkhidden" to="/new">
                                <button className="RegisterForm__button">
                                    Register
                                </button>
                            </Link>
                                <a href={"/new"} className="RegisterForm__forgot">Do you have an account? Click here</a>
                        </form>
                    </div>
                    <Hero h={"88vh"}></Hero>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;