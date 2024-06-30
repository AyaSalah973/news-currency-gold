
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoldPrices = () => {
  const [goldPrices, setGoldPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGoldPrices = async () => {
      try {
        const response = await axios.get('https://www.goldapi.io/api/XAU/EGP', {
          headers: {
            'x-access-token': 'goldapi-gqrlsly1xa75x-io',
            'Content-Type': 'application/json'
          }
        });
        setGoldPrices(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchGoldPrices();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div>
      <h1>Gold Prices</h1>
      <div className="gold-grid">
        <div className="gold-item">
          <h2>Price per ounce</h2>
          <p>{goldPrices.price_ounce} EGP</p>
        </div>
        <div className="gold-item">
          <h2>Price per gram 24K</h2>
          <p>{goldPrices.price_gram_24k} EGP</p>
        </div>
        <div className="gold-item">
          <h2>Price per gram 22K</h2>
          <p>{goldPrices.price_gram_22k} EGP</p>
        </div>
        <div className="gold-item">
          <h2>Price per gram 21K</h2>
          <p>{goldPrices.price_gram_21k} EGP</p>
        </div>
        <div className="gold-item">
          <h2>Price per gram 18K</h2>
          <p>{goldPrices.price_gram_18k} EGP</p>
        </div>
      </div>
    </div>
  );
};

export default GoldPrices;
