import React from 'react'

import Navbar from '../components/navbar.js';

export default function callToAction(props) {

    const styles = {
        backgroundImage: `linear-gradient(rgba(34, 51, 137, 0.55), rgba(34, 51, 137, 0.55)), url(${props.ctaImage})`,
    }



    return (
        <div style={styles} className="call-to-action-container">
            <Navbar />
            <div className="cta-center-text">
                <div>
                    <h1 className="cta-heading">{props.title}</h1>
                    <h2 className="cta-subHeading">...{props.subTitle}</h2>
                    <a href="#" className="cta-button"><span>Contact Us</span></a>
                </div>
                
            </div>
        </div>
    )
}
