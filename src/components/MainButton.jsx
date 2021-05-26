import React from "react"
import {Link} from "react-router-dom"
import "./style/MainButton.css"

const Button = (props) =>{
    return(
        <React.Fragment>
            <Link href="" className="Button" to="/new">
                <p>{props.contentText}</p>
            </Link>
        </React.Fragment>
    );
}

export default Button;