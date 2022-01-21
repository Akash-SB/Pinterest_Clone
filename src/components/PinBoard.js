import React from 'react'
import { AiFillInstagram, AiFillHeart, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function PinBoard({ pins, darkTheme }) {

    return (
        <div className={ darkTheme ? "pins_wrapper dark-mode": "pins_wrapper"} >
            <div className="pins_container">
                {pins.map((pin, index) => {
                    return (                        
                        <div className="pin_card" key={index}                       
                        >
                            <LazyLoadImage
                                alt={pin.alt_description}
                                effect="blur"
                                src={pin.urls.regular}
                            />
                            <div className="overlay_container"                               
                            >
                                <div className="top_row">
                                    <div className="pin_description">
                                        <Link to={{
                                            pathname: '/Pin'                                            
                                        }} state={{pinData : pin}}>
                                            {pin.alt_description}
                                        </Link>
                                    </div>
                                    <div className="pin_likes">
                                        <div className="heart_icon">
                                             <AiFillHeart />
                                        </div>
                                        {pin.likes}
                                    </div>
                                </div>
                                <div className="bottom_row">
                                    <div className="user_name">
                                        <span>{pin.user.username}</span>
                                    </div>
                                    <div className="social_media">
                                        <div className="insta_user_name">
                                            <a href="/"><AiFillInstagram/></a>
                                        </div>
                                        <div className="twitter_user_name">
                                            <a href="/">
                                                <AiFillTwitterCircle/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default PinBoard
