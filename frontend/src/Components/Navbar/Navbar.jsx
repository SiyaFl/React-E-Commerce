import React, {useContext, useState} from 'react';
// Corrected the file path for the CSS module
import Classes from './navbar.module.css';
// Corrected the file paths for the assets
import logo from '../Assets/logo2.png';
import cart_icon from '../Assets/cart_icon.png';
import {Link} from 'react-router-dom';
import {ShopContext} from '../../Context/ShopContext';


const Navbar = () => {
    const [ menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext)
    return (
        <div className={Classes.Navbar}>
            <div className={Classes.nav_logo}>
              <img src={logo} alt="logo" />
              <p>Pet-Stores</p>
            </div>
            <ul className={Classes.nav_menu}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu ==="shop"?<hr/>:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("Birds");
          }}
        >
          <Link style={{textDecoration: 'none'}} to='/Birds'>Birds</Link> {menu ==="Birds"?<hr/>:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("Cats");
          }}
        >
          <Link style={{textDecoration: 'none'}} to='/Cats'>Cats</Link> {menu ==="Cats"?<hr/>:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("Dogs");
          }}
        >
          <Link style={{textDecoration: 'none'}} to='/Dogs'>Dogs</Link> {menu ==="Dogs"?<hr/>:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("Fish");
          }}
        >
          <Link style={{textDecoration: 'none'}} to='/Fish'>Fish</Link> {menu ==="Fish"?<hr/>:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("SmallPets");
          }}
        >
          <Link style={{textDecoration: 'none'}} to='/SmallPets'>Small Pets</Link> {menu ==="SmallPets"?<hr/>:<></>}
        </li>
      </ul>
        <div className={Classes.cart}>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
          <div className={Classes.nav_cart_count}>{getTotalCartItems()}</div> 
        </div>
     </div>
    );
};

export default Navbar;
