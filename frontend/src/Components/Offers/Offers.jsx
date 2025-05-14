import React from 'react';
import "./Offers.css";
import exclusive_image from '../Assets/exclusive_image.jpg';

const Offers = () => {
    return (
        <div className="offers">
         <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For Your Pets</h1>
            <p>BEST SELLING PRODUCTS</p>
            <button>Check Now</button>
         </div>
         <div className="offers-right">
            <img src={exclusive_image} alt="offer" />
        </div>    
        </div>
    );
};

export default Offers;
