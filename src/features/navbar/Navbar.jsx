import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../../assets/images/logo192.png"

const Navbar = () => {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <a href="#banner">
                            <div className="navbar__left-logo">
                                <img src={logo} alt="logo" />
                            </div>
                        </a>
                    </ul>
                    {state ? (
                        <ul className="navbar__right">
                            <li>
                                <a href="#banner">ГЛАВНАЯ</a>
                            </li>
                            <li>
                                <a href="#works">РАБОТЫ</a>
                            </li>
                            <li>
                                <a href="#about">ОБО МНЕ</a>
                            </li>
                            <li>
                                <a href="#awards">НАГРАДЫ</a>
                            </li>
                            <li>
                                <a href="#contacts">КОНТАКТЫ</a>
                            </li>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
            </div>
        </nav>
    );
};

export default Navbar;
