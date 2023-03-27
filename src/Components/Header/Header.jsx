import React from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg'

const Header = () => {
  return (
    <nav className='header'>
      <img src={Logo} alt="" />
      <div className='manu'>
        <a href="#">Order</a>
        <a href="#">Order Review</a>
        <a href="#">Inventory</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Header;