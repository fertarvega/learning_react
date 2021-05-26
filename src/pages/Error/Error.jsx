import React from "react"
import img404 from "../../images/img404.svg"

class Error extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div className="Error_img">
                    <img src={img404} alt="" />
                </div>
            </React.Fragment>
        );
    }
}

export default Error;