import React from "react";
import {
    FaLinkedinIn,
    FaGithub
} from "react-icons/fa";
const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contactSection">
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
