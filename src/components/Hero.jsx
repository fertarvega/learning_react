import React from "react"
import "./style/Hero.css"

const Hero = (props) => {
    return(
        <React.Fragment>
            <div className="Hero">
                <div className="Hero__color_filter" style={{height: props.h}}></div>
                <div className="Hero__img" style={{height: props.h}}>
                    <img src={"https://images5.alphacoders.com/985/thumb-1920-985300.jpg"} alt="" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Hero;