import React from "react";

export default function Info() {
    return (
        <div className="info">
            <img src="images/Rectangle 90.png" />
            <h2 className="info-name">Laura Smith</h2>
            <h3 className="info-career">Frontend Developer</h3>
            <h4 className="info-weblink">laurasmith.website</h4>
            <button type="button" className="btn-email"><img className="img-btn-email" src="images/icons8-mail-30.png"/> Email</button>
            <button type="button" className="btn-linkedln">Linkedln</button>
        </div>
    )
}