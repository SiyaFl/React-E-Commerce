import React from 'react';
import "./Hero.css";
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow_icon.png';
import hero_img from '../Assets/hero_image.jpg';


const Hero = () => {
    return (
        <div className="hero">
         <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
           <div className="hand-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
           </div>
           <p>Collections</p>
           <p>For everypet</p>
           <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow" />
           </div>
         </div>
         <div className="hero-right">
            <img src={hero_img} alt="hero" />
        </div>
       </div>
    );
};

export default Hero;
