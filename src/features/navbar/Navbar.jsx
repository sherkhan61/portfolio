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
                        <div className="navbar__left-logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </ul>
                    {state ? (
                        <ul className="navbar__right">
                            <li>
                                <a href="">ГЛАВНАЯ</a>
                            </li>
                            <li>
                                <a href="">РАБОТЫ</a>
                            </li>
                            <li>
                                <a href="">ОБО МНЕ</a>
                            </li>
                            <li>
                                <a href="">НАГРАДЫ</a>
                            </li>
                            <li>
                                <a href="">КОНТАКТЫ</a>
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
