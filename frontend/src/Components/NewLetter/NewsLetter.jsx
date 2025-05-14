import React from 'react';
import "./NewLetter.css";

const NewsLetter = () => {
    return (
        <div className='newsletter'>
          <h1>Get Exclusive Offers On Your Email</h1>
          <p>Subscribe to our newsletter and stay update!!!</p>
          <div>
            <input type="e-mail" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
    );
};

export default NewsLetter;
