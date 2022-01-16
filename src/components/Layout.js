import React from "react"
import "../index.css"
import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import * as PropTypes from "prop-types"


export const Layout = (props) => {
    let {children} = props

    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

Layout.propTypes = {children: PropTypes.any}