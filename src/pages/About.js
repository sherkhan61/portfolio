import React from 'react'
import {Layout} from "../components/Layout";



const About = () => {
    return (
        <Layout>
            <section className="section single-page">

                <div className="section-title">
                    <h1>about me</h1>
                    <div className="underline"></div>
                </div>

                <div className="section-center page-info">

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
                </div>
            </section>
        </Layout>
    )
}


export default About