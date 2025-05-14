import React from 'react';
import "./Footer.css";
import footer_logo from '../Assets/logo2.png';
import instagram from '../Assets/instagram_icon.png';
import pintester from '../Assets/pintester_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='footer'>
          <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Pet-Stores</p>
          </div>
          <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintester} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp} alt="" />
            </div>
          </div>
          <div className="footer-copy-right">
            <hr />
            <p>© {currentYear} PetStores. All Rights Reserved</p>
          </div>
        </div>
    );
};

export default Footer;
