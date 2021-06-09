import React from "react"
import img404 from "../../images/img404.svg"
import Footer from "../../components/Footer"
import "./Error.css"

class Error extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div className="Error_img">
                    <img src={img404} alt="" />
                </div>
                <Footer s={{bottom: 0}}></Footer>
            </React.Fragment>
        );
    }
}

export default Error;