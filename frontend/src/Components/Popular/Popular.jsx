import React from 'react';
import "./Popular.css";
import data_product from '../Assets/data';
import Item from "../Item/Item";

const Popular = () => {
    return (
        <div className="popular">
          <h1>POPULAR IN BIRDS</h1>
          <hr />
          <div className="popular-item">
            {data_product.map((item, i) => {
            return (
            <Item 
            key={i} 
            id={item.id}
            image={item.image} 
            name={item.name} 
            price={item.price} 
            priceOld={item.priceOld} 
            />
            );
        })}
         </div>     
        </div>
    );
}

export default Popular;
