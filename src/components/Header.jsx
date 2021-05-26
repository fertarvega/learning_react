import React from 'react'
import {Link} from "react-router-dom"
import './style/Header.css'

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                        <img src="https://cdn2.iconfinder.com/data/icons/round-set-vol-2/120/gamepad-512.png" alt="" />
                    </Link>
                    {/* {this.props.children} */}
                </div>
            </React.Fragment>
        );
    }

}

export default Header;