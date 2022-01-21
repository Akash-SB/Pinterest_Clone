import React, { useState } from 'react'
import logo from '../assets/pinterest.png'
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header({onSearchSubmit, toggleThemeMode, darkTheme}) {
    const [input, setInput] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSearchSubmit(input);
    }
    return (
        <div className={darkTheme ? "header_wrapper dark-mode" : "header_wrapper"}>
            <div className="header_container">
                <div className="logo_wrapper">
                <Link to="/">
                    <img src={logo} alt="pinterest logo" />
                </Link>
            </div>
            <ul className="left_navigation">
                <li className="nav_items"><Link to="/" className='active'>Home</Link></li>
                <li className="nav_items mobile_menu"><Link to="/">Today</Link></li>
            </ul>
            <div className="searchBar_wrapper">
                <FaSearch />
                <form onSubmit={onSubmitHandler}>
                    <input type="text" placeholder='Search' onChange={(e) => { setInput(e.target.value) }} />
                </form>
            </div>
            <ul className="right_navigation">
                <li className="right_nav_item mobile_menu"><Link to="/"><IoIosNotifications/></Link></li>
                <li className="right_nav_item mobile_menu"><Link to="/"><AiFillMessage/></Link></li>
                <li className="right_nav_item">
                         <div onClick={toggleThemeMode} className={`toggle${darkTheme ? " night" : ""}`}>
                            <div className="notch">
                                <div className="crater" />
                                <div className="crater" />
                            </div>
                        </div>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Header
