import React, { Component } from 'react'
import HeaderBackground from '../images/background.jpg'
import ProfilePic from '../images/profile_image.jpg'
import "./style/Badge.css";

class Badge extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="Badge m-5 flex-column">
                    <div className="Badge__header">
                        <img src={HeaderBackground} alt="header_background" />
                    </div>
                    <div className="Badge__userInfo container mt-5">
                        <div className="Badge__userImage">
                            <img src={this.props.picture} alt="profile_image" />
                        </div>
                        <div className="container Badge__userInfoDisplay">
                            <h4 className="text-center mt-3"> Fernando Tarango <i>20</i></h4>
                            <p className="text-center">Chihuahua city</p>
                        </div>
                    </div>
                    <div className="Badge__info container pt-3">
                        <div className="row">
                            <div className="col">
                                <h4 className="text-center fw bold">80k</h4>
                                <p className="text-center">Followers</p>
                            </div>
                            <div className="col">
                                <h4 className="text-center fw bold">803k</h4>
                                <p className="text-center">Likes</p>
                            </div>
                            <div className="col">
                                <h4 className="text-center fw bold">1.5</h4>
                                <p className="text-center">Pictures</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </React.Fragment>
        );
    }
}

export default Badge;