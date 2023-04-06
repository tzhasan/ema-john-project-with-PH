import React from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='header'>
      <img src={Logo} alt="" />
      <div className='manu'>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/invertory">Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;