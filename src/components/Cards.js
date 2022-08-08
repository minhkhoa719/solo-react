import React from "react";
import Info from './Info'
import About from './About'
import Interests from './Interests'
import SocialIcon from './SocialIcon'

export default function Card(){
    return (
        <div className="card-container">
            <div className="card-content">
            <Info />
            <About/>
            <Interests/>
            <SocialIcon />  
            </div>
        </div>
    )
}