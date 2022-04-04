import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import'./Product.css'
const Product = (props) => {
      const {name,img,seller,price,ratings}=props.elements;
    //   console.log(props.handeler);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <h4>price:${price}</h4>
                <p>Manufacturer{seller}</p>
                <p>Rating:{ratings} stars</p>
            </div>
            
             <button onClick={()=>props.handeler(props.elements)} className='btn-cart'>
                <p>Add To Cart</p> 
                 <FontAwesomeIcon  icon={faShoppingCart}></FontAwesomeIcon>
             </button>
             
        </div>
    );
};

export default Product;