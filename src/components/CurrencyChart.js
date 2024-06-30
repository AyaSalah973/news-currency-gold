import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// تسجيل المكونات
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CurrencyChart = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [goldData, setGoldData] = useState([]);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await axios.get('https://api.exchangerate.host/timeseries', {
          params: {
            start_date: '2023-01-01',
            end_date: '2023-12-31',
            base: 'EGP',
            symbols: 'USD'
          }
        });

        console.log('Currency API Response:', response.data);

        if (response.data && response.data.success) {
          const rates = response.data.rates;
          const formattedData = Object.keys(rates).map(date => ({
            date,
            rate: rates[date].USD
          }));
          setCurrencyData(formattedData);
        } else {
          console.error('Invalid response data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    const fetchGoldData = async () => {
      try {
        const response = await axios.get('https://metals-api.com/api/timeseries', {
          params: {
            start_date: '2023-01-01',
            end_date: '2023-12-31',
            base: 'XAU',
            symbols: 'EGP',
            access_key: '3zh145cumx26115b241pcc2xdottmz22u0371cy3o3p3m0o3w0thb4yo0t7z'
          }
        });

        console.log('Gold API Response:', response.data);

        if (response.data && response.data.rates) {
          const rates = response.data.rates;
          const formattedData = Object.keys(rates).map(date => ({
            date,
            price: rates[date].EGP
          }));
          setGoldData(formattedData);
        } else {
          console.error('Invalid response data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching gold data:', error);
      }
    };

    fetchCurrencyData();
    fetchGoldData();
  }, []);

  const currencyChartData = {
    labels: currencyData.map(item => item.date),
    datasets: [{
      label: 'سعر صرف USD/EGP',
      data: currencyData.map(item => item.rate),
      borderColor: 'blue',
      fill: false
    }]
  };

  const goldChartData = {
    labels: goldData.map(item => item.date),
    datasets: [{
      label: 'سعر الذهب (24 قيراط) بالجنيه المصري',
      data: goldData.map(item => item.price),
      borderColor: 'gold',
      fill: false
    }]
  };

  return (
    <div>
      <h2>معدلات صرف العملات التاريخية</h2>
      <Line data={currencyChartData} />
      <h2>أسعار الذهب التاريخية</h2>
      <Line data={goldChartData} />
    </div>
  );
};

export default CurrencyChart;
