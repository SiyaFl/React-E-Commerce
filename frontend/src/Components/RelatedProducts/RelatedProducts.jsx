import React from 'react';
import "./RelatedProducts.css";
import data_product from '../Assets/data';
import Item from "../Item/Item";

const RelatedProducts = () => {
    return (
        <div className="relatedProducts"> 
          <h1>Related Product</h1>
            <hr />
            <div className="relatedProducts-item">
                {data_product.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            priceOld={item.priceOld} // changed from price-old to priceOld
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default RelatedProducts;
