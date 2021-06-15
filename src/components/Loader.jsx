import React from "react"
import "./style/Loader.css"

const Loader = () => {
    return (
        <div className="Loader">
            <div className="lds-grid">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader;