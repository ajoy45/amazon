import React from 'react';
import'./Cart.css'
const Cart = ({cart}) => {
    //  console.log(cart);
    let total=0;
    let shipping=0;
    let tax=0;
    let grandTotal=0;
     for(const product of cart){
        //  console.log(product);
         total=total+product.price;
         shipping=shipping+product.shipping;
          tax=total*5/100;
          grandTotal=total+shipping+tax;
     }
    return (
        <div className='cart'>
            <h1>Order summery</h1>
             <p>Selected Item:{cart.length}</p>
             <p>total price:${total}</p> 
             <p>total shipping:${shipping}</p>
             <p>tax:${tax}</p>
             <h3>GRAND TOTAL:${grandTotal}</h3>
        </div>
    );
};

export default Cart;