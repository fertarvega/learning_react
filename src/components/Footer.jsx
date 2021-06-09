import React from 'react'
import './style/Footer.css'

const Footer = (props) => {
    return(
        <React.Fragment>
            <div className="Footer" style={props.s}>
                <p> This is an example made with ReactJS by Fernando Tarango 💥</p>
            </div>
        </React.Fragment>
    );
}

export default Footer;