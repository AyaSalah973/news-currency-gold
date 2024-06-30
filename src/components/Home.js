
import React from 'react';
import NewsGrid from './NewsGrid'; 
 import GoldPrices from './GoldPrices';
 import CurrencyExchange from './CurrencyExchange';

const Home = () => {
  return (
    <div className="home">
      <NewsGrid />
      <GoldPrices/>
      <CurrencyExchange />
     
    </div>
  );
};

export default Home;

