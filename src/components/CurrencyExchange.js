import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CurrencyExchange = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'cur_live_d2nNMJZdpcWOu5d80sHWhzvc4zSeeVH5l47X4fFx';
    const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=USD&currencies=EGP`;

    axios.get(url)
      .then(response => {
        console.log('Exchange rate data:', response.data);
        if (response.data && response.data.data && response.data.data.EGP) {
          setExchangeRate(response.data.data.EGP.value);
        } else {
          setError(new Error('EGP exchange rate not found'));
        }
      })
      .catch(error => {
        console.error('Error fetching exchange rate:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Currency Exchange</h2>
    <div className="grid-container">
      <div className="grid-item">
        <h3>USD/EGP</h3>
        <p>{exchangeRate ? exchangeRate : 'Loading...'}</p>
      </div>
    </div>
    </div>
  );
};

export default CurrencyExchange;




