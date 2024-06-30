import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>News, Currency and Gold Tracker</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/currency-exchange">Currency Exchange</Link></li>
          <li><Link to="/gold-prices">Gold Prices</Link></li>
          <li><Link to="/convert">Currency Converter</Link></li>
          <li><Link to="/chart">Currency Chart</Link></li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
