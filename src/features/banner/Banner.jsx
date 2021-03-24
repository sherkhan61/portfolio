import React from 'react'
import {
    FaLinkedinIn,
    FaGithub
} from "react-icons/fa";
import react from "../../assets/images/logo192.png"
import redux from "../../assets/images/redux.svg"
import ts from "../../assets/images/ts.png"
import sass from "../../assets/images/sass.png"
import cv from "../../assets/cv/CV.pdf"


const Banner = () => {
    const [state] = React.useState({
        title: "Я Шерхан Тулкибай",
        text:
            "Я начинающий веб разработчик​"
    });
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li>
                                        <a href="https://www.linkedin.com/in/sherkhan-tulkibay/" target="_blank">
                                            <FaLinkedinIn className="headerIcon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/sherkhan61" target="_blank">
                                            <FaGithub className="headerIcon" />
                                        </a>
                                    </li>
                                </ul>
                                <h1>{state.title}</h1>
                                <p>{state.text}</p>
                                <div className="header__buttons">
                                    <a href={cv} download className="btn btn-outline">
                                        Скачать CV
                                    </a>
                                </div>
                                <div className="header__skills">
                                    <ul className="header__skills__ul">
                                        <li>
                                            <h3>React</h3>
                                            <img src={react} alt=""/>
                                        </li>
                                        <li>
                                            <h3>Redux</h3>
                                            <img src={redux} alt=""/>
                                        </li>
                                        <li>
                                            <h3>TS</h3>
                                            <img src={ts} alt=""/>
                                        </li>
                                        <li>
                                            <h3>SASS</h3>
                                            <img src={sass} alt=""/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;