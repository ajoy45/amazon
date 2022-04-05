import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setproducts]=useState([]);
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[]);
    const addToCartHandeler=(product)=>{
        // console.log(product);
        let newCart=[...cart,product];
        // console.log(newCart)
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className="products">
               {
                   products.map(product=><Product
                     key={product.id}
                     elements={product}
                     handeler={addToCartHandeler}
                   ></Product>)
               }
            </div>
            <div className="Order-summery">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
    
};

export default Shop;