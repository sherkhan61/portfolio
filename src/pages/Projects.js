import React from 'react'
import {Layout} from "../components/Layout";


import project1 from '../assets/images/foxrichcode-com.JPG'
import project2 from '../assets/images/hotel.JPG'
import project3 from '../assets/images/movie.JPG'
import project4 from '../assets/images/synaq.JPG'
import project5 from '../assets/images/e-commerce.JPG'


const Projects = () => {

    return (
        <Layout>
            <section className="section">
                <div className="section-center projects-page-center">

                    <article className="single-project">
                        <div className="project-container">
                            <img src={project1} alt="single project"/>
                            <a href="https://foxrichcode.com/"
                               className="project-icon" target="_blank"
                               rel="noreferrer">
                                <i className="fas fa-home"/>
                            </a>
                        </div>
                        <div className="project-details">
                            <h4>Information website</h4>
                            <p>
                                Foxrichcode.com - My own information website about web development, mobile development,
                                cyber security and artificial intelligence
                            </p>
                            <p>Technologies: Gatsby.js, React.js, Strapi, GraphQL, Axios, PostgreSQL, SCSS, Material UI, AWS S3, Heroku</p>
                            <div className="project-footer">
                                <span>
                                    <i className="fab fa-github"/>
                                </span>
                                <a href="https://github.com/sherkhan61/foxrichcode.com"
                                   target="_blank" rel="noreferrer">source code</a>
                            </div>
                        </div>
                    </article>

                    <article className="single-project">
                        <div className="project-container">
                            <img src={project4} alt="single project"/>
                            <a href="https://synaq.sts.kz/"
                               className="project-icon" target="_blank"
                               rel="noreferrer">
                                <i className="fas fa-home"/>
                            </a>
                        </div>
                        <div className="project-details">
                            <h4>Information website</h4>
                            <p>
                                Internet portal of the state technical service designed to automate the
                                process of providing services for testing the objects of informatization of
                                "electronic government" and information systems
                            </p>
                            <p>Technologies: JS, jQuery, CSS3</p>
                            <div className="project-footer">
                                <span>
                                    <i className="fab fa-github"/>
                                </span>
                                <a href="https://github.com/sherkhan61"
                                   target="_blank" rel="noreferrer">source code</a>
                            </div>
                        </div>
                    </article>

                    <article className="single-project">
                        <div className="project-container">
                            <img src={project2} alt="single project"/>
                            <a href="https://sherkhan61-hotel.netlify.app/"
                               className="project-icon" target="_blank" rel="noreferrer">
                                <i className="fas fa-home"/>
                            </a>
                        </div>
                        <div className="project-details">
                            <h4>Hotel website</h4>
                            <p>
                                Website for a wonderful hotel by the sea with luxurious rooms
                            </p>
                            <p>Technologies: React.js, CSS3, styled-components, Netlify</p>
                            <div className="project-footer">
                                <span>
                                    <i className="fab fa-github"/>
                                </span>
                                <a href="https://github.com/sherkhan61/hotel"
                                   target="_blank" rel="noreferrer">source code</a>
                            </div>
                        </div>
                    </article>
                    <article className="single-project">
                        <div className="project-container">
                            <img src={project3} alt="single project"/>
                            <a href="https://sherkhan61.github.io/movie/"
                               className="project-icon" target="_blank" rel="noreferrer">
                                <i className="fas fa-home"/>
                            </a>
                        </div>
                        <div className="project-details">
                            <h4>Movie website</h4>
                            <p>
                                Website for selecting and viewing a teaser of new movies
                            </p>
                            <p>Technologies: React.js, Redux, Axios, Bootstrap, SCSS</p>
                            <div className="project-footer">
                                <span>
                                    <i className="fab fa-github"/>
                                </span>
                                <a href="https://github.com/sherkhan61/movie"
                                   target="_blank" rel="noreferrer">source code</a>
                            </div>
                        </div>
                    </article>

                    <article className="single-project">
                        <div className="project-container">
                            <img src={project5} alt="single project"/>
                            <a href="https://sherkhan-e-store.netlify.app/"
                               className="project-icon" target="_blank" rel="noreferrer">
                                <i className="fas fa-home"/>
                            </a>
                        </div>
                        <div className="project-details">
                            <h4>E commerce</h4>
                            <p>
                                Website for buying and ordering online
                            </p>
                            <p>Technologies: React.js, Stripe.js, Material UI</p>
                            <div className="project-footer">
                                <span>
                                    <i className="fab fa-github"/>
                                </span>
                                <a href="https://github.com/sherkhan61/e-commerce"
                                   target="_blank" rel="noreferrer">source code</a>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </Layout>
    )
}


export default Projects