import React from "react"
import Footer from "../../components/Footer"
import "./Error.css"

class Error extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div className="Error_img">
                    <img src={"https://storyset.com/illustration/404-error/amico"} alt="" />
                </div>
                <Footer s={{bottom: 0}}></Footer>
            </React.Fragment>
        );
    }
}

export default Error;