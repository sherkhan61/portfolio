import React from "react";
import {
    FaLinkedinIn,
    FaGithub
} from "react-icons/fa";

const Contact = () => {
    const [header] = React.useState({
        subHeading: "КОНТАКТЫ"
    });
    return (
        <div className="contact" id="contacts">
            <div className="container">
                <div className="contactSection">
                    <div className="common">
                        <h1 className="mainHeader">{header.subHeading}</h1>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="row justifyConter">
                        <div className="col-6">
                            <ul className="contactCircles">
                                <a href="https://www.linkedin.com/in/sherkhan-tulkibay/" target="_blank">
                                    <li>
                                        <FaLinkedinIn className="contactIcon" />
                                    </li>
                                </a>
                                <a href="https://github.com/sherkhan61" target="_blank">
                                    <li>
                                        <FaGithub className="contactIcon" />
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
