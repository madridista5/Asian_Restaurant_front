import React, {useState} from 'react';
import {GiHamburger, GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import '../../components/Navbar/Navbar.css';

export const NavbarRoutes = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={require("../../assets/asian_food.png")} alt="app logo"/>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="/">Home</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href="/login" className="p__opensans">Logowanie / Rejestracja</a>
                <div/>
                <a href="/" className="p__opensans">Moje zamówienie</a>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close"
                                                 onClick={() => setToggleMenu(false)}/>
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__opensans"><a href="/">Home</a></li>
                            <li className="p__opensans"><a href="/menu">Menu</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
};