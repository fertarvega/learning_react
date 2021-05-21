import React from 'react'
import './style/Header.css'

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src="https://cdn2.iconfinder.com/data/icons/round-set-vol-2/120/gamepad-512.png" alt="" />
                    {/* {this.props.children} */}
                </div>
            </React.Fragment>
        );
    }

}

export default Header;