import React, { useContext } from 'react';
import "./ProductDisplay.css";
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)
    return (
        <div className= "productDisplay">
            {console.log(props.product)}
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div className="productdisplay-img">
                    <img ClassName="productdisplay-main-img" src={product.image} alt=""/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                  <img src={star_icon} alt=""/>
                  <img src={star_icon} alt=""/>
                  <img src={star_icon} alt=""/>
                  <img src={star_icon} alt=""/>
                  <img src={star_dull_icon} alt=""/>
                  <p>(122)</p>
                </div>
            <div className="productdisplay-right-prices">
              <div className="productdisplay-right-price-old">
                ${product.old_price}
             </div>
             <div className="productdisplay-right-price-new">
                ${product.new_price}
             </div>
            </div>
            <div className="productdisplay-right-discription">
            Royalcanin feline breed nutrition dry sphynx adult sphynx cats 12months 2kg
            </div>
            <div className="productdisplay-right-quantity">
                <h1>Select quantity</h1>
                <div className="productdisplay-right-quantities">
                    <div>1 Kg</div>
                    <div>2 Kg</div>
                    <div>5 Kg</div>
                    <div>12 Kg</div>
                </div>
             </div>
             <button onClick={() =>{addToCart(product.id)}}>Add to Cart</button>
             <p className="productdisplay-right-category"><span>Category :</span>Birds,Avi ,Bird Food</p>
             <p className="productdisplay-right-category"><span>Tags :</span>Latest</p>
             
            </div>
        </div>
    );
}

export default ProductDisplay;
