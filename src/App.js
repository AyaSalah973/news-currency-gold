
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NewsGrid from './components/NewsGrid';
import NewsDetails from './components/NewsDetails';
import CurrencyExchange from './components/CurrencyExchange';
import GoldPrices from './components/GoldPrices';
import CurrencyConverter from './components/CurrencyConverter';
import CurrencyChart from './components/CurrencyChart';

 import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsGrid />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/currency-exchange" element={<CurrencyExchange />} />
          <Route path="/gold-prices" element={<GoldPrices />} />
          <Route path="/convert" element={<CurrencyConverter />} />
          <Route path="/chart" element={<CurrencyChart />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
