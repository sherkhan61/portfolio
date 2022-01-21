import React from 'react'
import {Layout} from "../components/Layout";
import aboutImg from '../assets/images/about-img.jpg'
import smallImg from '../assets/images/small.jpg'

import project1 from '../assets/images/foxrichcode.JPG'
import project2 from '../assets/images/hotel.JPG'
import project3 from '../assets/images/movie.JPG'
import project4 from '../assets/images/synaq.JPG'
import project5 from '../assets/images/e-commerce.JPG'

import backgroundVideo from '../assets/videos/connect.mp4'
import {Link} from "react-router-dom";
import cv from "../assets/cv/CV(eng)-Sherkhan.pdf";
import image from "../assets/images/photo.jpg";



const Home = () => {
    return (
        <Layout>
            <header className="hero">
                <div className="section-center hero-center">
                    <article className="hero-info">
                        <div className="underline"></div>
                        <h1>I'm Sherkhan</h1>
                        <h4>Frontent web developer</h4>
                        <a href={cv} download className="btn btn-outline">
                            download CV
                        </a>

                        <ul className="social-icons hero-icons">
                            <li>
                                <a href="https://github.com/sherkhan61"
                                   className="social-icon"
                                   target="_blank" rel="noopener">
                                    <i className="fab fa-github" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/sherkhan-tulkibay/"
                                   className="social-icon"
                                   target="_blank" rel="noopener">
                                    <i className="fab fa-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className="hero-img">
                        <img src={image} className="hero-photo" alt="Sherkhan Tulkibay" />
                    </article>
                </div>
            </header>
            <section className="section about">
                <div className="section-center about-center">

                    <article className="about-img">
                        <img
                            src={aboutImg}
                            className="hero-photo"
                            alt="about img"
                        />
                    </article>

                    <article className="about-info">

                        <div className="section-title about-title">
                            <h2>about</h2>
                            <div className="underline"></div>
                        </div>

                        <p>I'm front-end developer with experience:</p>
                        <ul>
                            <li>creating a SPA using React JS and Redux ;</li>
                            <li>creating static websites using Gatsby JS and Strapi.</li>
                        </ul>
                        <p>
                            I have knowledge in the field of user interface, testing and debugging.
                            Now I am improving my skills in this direction and expanding them with the help of new technologies.
                            Capable of effective self-management, as well as team collaboration.
                            Open for your suggestions
                        </p>
                        <Link to="/about" className="btn">about me</Link>
                    </article>
                </div>
            </section>

            <section className="section bg-grey">

                <div className="section-title">
                    <h2>services</h2>
                    <div className="underline"></div>
                </div>

                <div className="services-center section-center">

                    <article className="service">
                        <i className="fas fa-code service-icon" />
                        <h4>web development</h4>
                        <div className="underline"></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
                            obcaecati vero.
                        </p>
                    </article>

                    <article className="service">
                        <i className="fab fa-sketch service-icon" />
                        <h4>web design</h4>
                        <div className="underline"></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
                            obcaecati vero.
                        </p>
                    </article>

                    <article className="service">
                        <i className="fab fa-android service-icon" />
                        <h4>app design</h4>
                        <div className="underline"></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                            corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
                            obcaecati vero.
                        </p>
                    </article>

                </div>
            </section>

            <section className="section projects">

                <div className="section-title">
                    <h2>latest works</h2>
                    <div className="underline"></div>
                    <p className="projects-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                        repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
                        magnam, earum assumenda obcaecati cum quaerat facere ratione molestiae
                        dignissimos aliquid blanditiis architecto voluptates delectus
                        voluptate animi nulla! Autem explicabo perspiciatis officia ea.
                    </p>
                </div>

                <div className="section-center projects-center">

                    <Link to="/projects" className="project-1">
                        <article className="project">
                            <img
                                src={project1}
                                alt="single project"
                                className="project-img"
                            />
                            <div className="project-info">
                                <h4>Information website</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to="/projects" className="project-2">
                        <article className="project">
                            <img
                                src={project2}
                                alt="single project"
                                className="project-img"
                            />
                            <div className="project-info">
                                <h4>Hotel website</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to="/projects" className="project-3">
                        <article className="project">
                            <img
                                src={project3}
                                alt="single project"
                                className="project-img"
                            />
                            <div className="project-info">
                                <h4>Movie website</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to="/projects" className="project-4">
                        <article className="project">
                            <img
                                src={project4}
                                alt="single project"
                                className="project-img"
                            />
                            <div className="project-info">
                                <h4>Internet portal</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to="/projects" className="project-5">
                        <article className="project">
                            <img
                                src={project5}
                                alt="single project"
                                className="project-img"
                            />
                            <div className="project-info">
                                <h4>E-commerce</h4>
                            </div>
                        </article>
                    </Link>

                </div>
            </section>

            <section className="connect">
                <video
                    controls
                    autoPlay
                    muted
                    loop
                    className="video-container"
                    poster={project1}
                >
                    <source src={backgroundVideo} type="video/mp4" />
                    Sorry, your browser does not support embedded videos
                </video>
                <div className="video-banner">

                    <div className="section-title">
                        <h2>let's get in touch</h2>
                        <div className="underline"></div>
                    </div>

                    <p className="video-text">
                        Thank you for visiting my site, if you have any questions, I am always ready to answer them
                    </p>
                    <Link to="/contact" className="btn">contact me</Link>
                </div>
            </section>

            <section className="section skills">

                <div className="section-title">
                    <h2>skills</h2>
                    <div className="underline"></div>
                </div>

                <div className="section-center skills-center">
                    <article>
                        <h3>front end</h3>

                        <div className="skill">
                            <p>HTML/CSS</p>
                            <div className="skill-container">
                                <div className="skill-value value-80"></div>
                                <p className="skill-text">
                                    80%
                                </p>
                            </div>
                        </div>

                        <div className="skill">
                            <p>Javascript</p>
                            <div className="skill-container">
                                <div className="skill-value value-70"></div>
                                <p className="skill-text skill-text-70">
                                    70%
                                </p>
                            </div>
                        </div>

                        <div className="skill">
                            <p>React</p>
                            <div className="skill-container">
                                <div className="skill-value value-70"></div>
                                <p className="skill-text skill-text-70">
                                    70%
                                </p>
                            </div>
                        </div>

                    </article>
                    <article>
                        <h3>API</h3>

                        <div className="skill">
                            <p>REST API</p>
                            <div className="skill-container">
                                <div className="skill-value value-60"></div>
                                <p className="skill-text skill-text-60">
                                    60%
                                </p>
                            </div>
                        </div>

                        <div className="skill">
                            <p>GraphQL API</p>
                            <div className="skill-container">
                                <div className="skill-value value-60"></div>
                                <p className="skill-text skill-text-60">
                                    60%
                                </p>
                            </div>
                        </div>

                        <div className="skill">
                            <p>Headless CMS Strapi</p>
                            <div className="skill-container">
                                <div className="skill-value value-80"></div>
                                <p className="skill-text skill-text-80">
                                    80%
                                </p>
                            </div>
                        </div>

                    </article>
                </div>
            </section>

            <section className="section blog">

                <div className="section-title">
                    <h2>blog</h2>
                    <div className="underline"></div>
                </div>

                <div className="section-center blog-center">

                    <div className="card">

                        <div className="card-side card-front">
                            <img src={project1} alt="" />
                            <div className="card-info">
                                <h4>Information website</h4>
                                <p>
                                    Foxrichcode.com - My own information website about web development, mobile development,
                                    cyber security and artificial intelligence
                                </p>
                                <div className="card-footer">
                                    <img src={smallImg} alt="author image" />
                                    <p>7 min read</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-side card-back">
                            <button className="btn">
                                <Link to={'/projects'}>read more</Link>
                            </button>
                        </div>
                    </div>

                    <div className="card">

                        <div className="card-side card-front">
                            <img src={project4} alt="" />
                            <div className="card-info">
                                <h4>Internet portal</h4>
                                <p>
                                    Internet portal of the state technical service designed to automate the
                                    process of providing services for testing the objects of informatization of
                                    "electronic government" and information systems
                                </p>
                                <div className="card-footer">
                                    <img src={smallImg} alt="author image" />
                                    <p>7 min read</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-side card-back">
                            <button className="btn">
                                <Link to={'/projects'}>read more</Link>
                            </button>
                        </div>
                    </div>

                    <div className="card">

                        <div className="card-side card-front">
                            <img src={project2} alt="" />
                            <div className="card-info">
                                <h4>Hotel website</h4>
                                <p>
                                    Website for a wonderful hotel by the sea with luxurious rooms
                                </p>
                                <div className="card-footer">
                                    <img src={smallImg} alt="author image" />
                                    <p>7 min read</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-side card-back">
                            <button className="btn">
                                <Link to={'/projects'}>read more</Link>
                            </button>
                        </div>
                    </div>

                    <div className="card">

                        <div className="card-side card-front">
                            <img src={project3} alt="" />
                            <div className="card-info">
                                <h4>Movie website</h4>
                                <p>
                                    Website for selecting and viewing a teaser of new movies
                                </p>
                                <div className="card-footer">
                                    <img src={smallImg} alt="author image" />
                                    <p>7 min read</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-side card-back">
                            <button className="btn">
                                <Link to={'/projects'}>read more</Link>
                            </button>
                        </div>
                    </div>

                    <div className="card">

                        <div className="card-side card-front">
                            <img src={project5} alt="" />
                            <div className="card-info">
                                <h4>E-commerce</h4>
                                <p>
                                    Website for buying and ordering online
                                </p>
                                <div className="card-footer">
                                    <img src={smallImg} alt="author image" />
                                    <p>7 min read</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-side card-back">
                            <button className="btn">
                                <Link to={'/projects'}>read more</Link>
                            </button>
                        </div>
                    </div>

                </div>
            </section>

        </Layout>
    )
}


export default Home