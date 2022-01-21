import React from 'react'
import { useLocation } from 'react-router-dom'
import { FiDownload, FiUpload, FiLink, FiHeart } from "react-icons/fi"
import Loader from './Loader'
import PinBoard from './PinBoard'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Pin({loading, pins, darkTheme}) {
    const location = useLocation();
    const {alt_description, description, likes, user, urls, links} = location.state.pinData;
    return (
        <>
            <div className={darkTheme ? "single_pin dark-mode" : "single_pin"}>
                <div className="pin_board">
                    <div className="image_container">
                        <LazyLoadImage
                                alt={alt_description}
                                effect="blur"
                                src={urls.full}
                            />
                    </div>
                    <div className="description_Container">
                        <div className="top_row">
                            <div className="left_navigation_utility">
                                <a href={links.download}><FiDownload /></a>
                                <a href="/"><FiUpload /></a>
                                <a href="/" onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}><FiLink /></a>
                            </div>
                            <div className="right_navigation_utility">
                                <div className="username">{ user.name }</div>
                                <div className="pin_likes">
                                    <FiHeart />
                                    <span>{likes}</span>
                                </div>
                            </div>
                        </div>
                        <div className="main_description">
                            <a href={user.portfolio_url}>{user.username}</a>
                            <h2 className="pin_discription">{description}</h2>
                            <p className="pin_alt_discription">{ alt_description }</p>
                        </div>
                        <div className="comment_div">
                            <h2>Comments</h2>
                            <p>Share feedback, ask a question or give a high five</p>
                            <div className="comment_form">
                                <div className="user_profile"><span>A</span></div>
                                <div className="comment_text">
                                    <input type="text" name="comment" id="comment" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
            <div className={darkTheme ? "more_pins_container dark-mode" : "more_pins_container"}>
                <p className="more_pins">
                    More like this
                </p>
                 {loading ? <Loader /> :
                <PinBoard pins={pins} />}
            </div>
        </>
    )
}

export default Pin
