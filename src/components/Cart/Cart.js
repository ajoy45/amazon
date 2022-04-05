import React from 'react';

const Cart = ({cart}) => {
     console.log(cart)
    return (
        <div>
            <h1>Order summery</h1>
             <p>Selected Item:{cart.length}</p> 
        </div>
    );
};

export default Cart;