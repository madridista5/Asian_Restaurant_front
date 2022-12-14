import React, {useContext, useState} from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {Link} from "react-router-dom";
import {UserRoleContext} from "../../contexts/userRole.context";

import './Navbar.css';

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const {userRole} = useContext(UserRoleContext);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={require("../../assets/asian_food.png")} alt="app logo"/>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">O nas</a></li>
                <li className="p__opensans"><a href="#menu">Menu</a></li>
                <li className="p__opensans"><a href="#awards">Nagrody</a></li>
                <li className="p__opensans"><a href="#contact">Kontakt</a></li>
                {userRole && <li className="p__opensans"><Link to="/signOut">Wyloguj</Link></li>}
                {userRole === 'ADMIN' && <li className="p__opensans"><Link to="/admin">Admin</Link></li>}
            </ul>
            <div className="app__navbar-login">
                <Link to="/login" className="p__opensans">Logowanie / Rejestracja</Link>
                <div/>
                <Link to="/order" className="p__opensans">Moje zamówienie</Link>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close"
                                                 onClick={() => setToggleMenu(false)}/>
                        <ul className="app__navbar-smallscreen-links">
                            <li className="p__opensans"><a href="#home">Home</a></li>
                            <li className="p__opensans"><a href="#about">O nas</a></li>
                            <li className="p__opensans"><a href="#menu">Menu</a></li>
                            <li className="p__opensans"><a href="#awards">Nagrody</a></li>
                            <li className="p__opensans"><a href="#contact">Kontakt</a></li>
                            <li className="p__opensans"><Link to="/login">Logowanie /
                                Rejestracja</Link></li>
                            <li className="p__opensans"><Link to="/order">Moje zamówienie</Link>
                            </li>
                            {userRole && <li className="p__opensans"><Link to="/signOut">Wyloguj</Link></li>}
                            {userRole === 'ADMIN' && <li className="p__opensans"><Link to="/admin">Admin</Link></li>}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
};