import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Circles } from 'react-loader-spinner'

function Loader() {
    return (
        <div className="loader_wraper">
            <div className="loader_container">
                <div className="loading_icon">
                    <Circles type="Circles" color="#767676" height={60} width={60}/>
                </div>
                <p>We are loading content for you....</p>
            </div>
        </div>
    )
}

export default Loader
