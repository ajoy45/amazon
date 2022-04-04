
import React from 'react';
import logo from '../../images/Logo.svg'
import '../Header/Header.css'
const Header = () => {
    return (
        <nav className='header'>
         <img src={logo} alt="" />
         <div>
             <a href="/Home">Home</a>
             <a href="/Orer">Order</a>
             <a href="/Manege inventory">Mahage Inventory</a>
         </div>
        </nav>
    );
};

export default Header;