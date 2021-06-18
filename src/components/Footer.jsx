import React from "react"
import "./style/Footer.css"

var style = {

    backgroundColor: "#F79927",
    color: "#FFFFFF",
    textAlign: "center",
    alignItems: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    zIndex: "100",

}

var phantom = {

    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',

}

function Footer({ children }) {

    return (

        <div>

            <div style={phantom} />

            <div style={style} className="footer">

                <p>💥 Created by Carpool Team 💥</p>

                {children}

            </div>

        </div>

    )

}

export default Footer;