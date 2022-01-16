import React from 'react'
import {Layout} from "../components/Layout";



const Contact = () => {
    return (
        <Layout>
            <section className="section single-page">

                <div className="section-title">
                    <h1>contact</h1>
                    <div className="underline"></div>
                </div>

                <div className="section-center page-info">

                    <p>
                        If you are looking to get ahold of me, you can send me an email at
                        <a href="mailto:tulkibai.sherkhan@gmail.com"> tulkibai.sherkhan@gmail.com</a>
                    </p>
                    <p>
                        You can also reach me on Telegram at
                        <a href="https://t.me/sherkhan61"> @sherkhan61 </a>
                    </p>
                </div>
            </section>
        </Layout>
    )
}

export default Contact