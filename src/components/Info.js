import React from "react";
import { FontAwesomeIcon } from"@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
export default function Info() {
    return (
        <div className="info">
            <img src="images/Rectangle 90.png" />
            <h2 className="info-name">Laura Smith</h2>
            <h3 className="info-career">Frontend Developer</h3>
            <h4 className="info-weblink">laurasmith.website</h4>
            <button type="button" className="btn-email">
                <FontAwesomeIcon  icon={faEnvelope } />
                <span style = {{"margin-left" : 8}}>Email</span>     
            </button>
            <button type="button" className="btn-linkedln">
                <FontAwesomeIcon  icon={faLinkedin } />
                <span style={{"margin-left" : 8}}>Linkedin</span>
            </button>
        </div>
    )
}