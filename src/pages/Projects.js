import React from 'react'
import {Layout} from "../components/Layout";

import project1 from '../assets/images/project-1.jpeg'

const Projects = () => {
    return (
        <Layout>
            <section className="section">
                <div className="section-center projects-page-center">

                    <article className="single-project">
                        <div className="project-container">
                            <img src={project1} alt="single project"/>
                            <a href="https://www.johnsmilga.com" className="project-icon">
                                <i className="fas fa-home"></i>
                            </a>
                        </div>
                        <div className="project-details">
                            <h4>project name</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                                eveniet amet odit aperiam, provident cum possimus sapiente minus
                                quos! Ipsum?
                            </p>
                            <div className="project-footer">
                                <span>
                                    <i className="fab fa-github"></i>
                                </span>
                                <a href="https://www.github.com">source code</a>
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        </Layout>
    )
}


export default Projects