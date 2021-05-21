import React from "react"
import "./style/MainButton.css"

const Button = (props) =>{
    return(
        <React.Fragment>
            <a href="" className="Button">
                <p>{props.contentText}</p>
            </a>
        </React.Fragment>
    );
}

export default Button;