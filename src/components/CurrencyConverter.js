import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CurrencyConverter = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const apiKey = 'cur_live_d2nNMJZdpcWOu5d80sHWhzvc4zSeeVH5l47X4fFx'; // استخدم مفتاح API الخاص بك هنا
    const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=USD&currencies=EGP`;

    axios.get(url)
      .then(response => {
        console.log('API response:', response.data); 
        if (response.data && response.data.data && response.data.data.EGP) {
          setExchangeRate(response.data.data.EGP.value);
        } else {
          console.error('Invalid data structure:', response.data);
        }
      })
      .catch(error => console.error('Error fetching exchange rates:', error));
  }, []);

  const handleConversion = () => {
    if (exchangeRate) {
      setConvertedAmount(amount * exchangeRate);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      setAmount(value);
    }
  };

  return (
    <div className='currency-converter '>
      <h3 className='Title'>Convert USD to EGP</h3>
      <input className='input'
        type="number" 
        value={amount} 
        onChange={handleChange} 
        placeholder="Amount in USD" 
        min="0" 
        step="1"
      />
      <button className='button' onClick={handleConversion}>Convert</button>
      {convertedAmount !== null && <p className='convert'>{amount} USD = {convertedAmount.toFixed(2)} EGP</p>}
    </div>
  );
};

export default CurrencyConverter;
