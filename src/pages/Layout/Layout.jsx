import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './Layout.css'

function Layout(props){
    return(
        <React.Fragment>
            <div className="Layout">
                <Header></Header>
                {props.children}
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Layout;