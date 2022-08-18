import React, {useState} from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import '../../components/Navbar/Navbar.css';
import {Link} from "react-router-dom";

export const NavbarRoutes = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={require("../../assets/asian_food.png")} alt="app logo"/>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><Link to="/">Home</Link></li>
            </ul>
            <div className="app__navbar-login">
                <Link to="/login" className="p__opensans">Logowanie / Rejestracja</Link>
                <div/>
                <Link to="/" className="p__opensans">Moje zamówienie</Link>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close"
                                                 onClick={() => setToggleMenu(false)}/>
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__opensans"><Link to="/">Home</Link></li>
                            <li className="p__opensans"><Link to="/menu">Menu</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
};