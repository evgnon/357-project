import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockData = () => {
  const [symbol, setSymbol] = useState('TSLA');
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=4AXW5TFHX9UKEMWT.Y`
      );
      setData(response.data['Global Quote']);
    };
    fetchData();
  }, [symbol]);

  return (
    <div>
    <h1>Dashboard</h1>
      <h3>Stock Data for {symbol}</h3>
      <p>Open: {data['02. open']}</p>
      <p>High: {data['03. high']}</p>
      <p>Low: {data['04. low']}</p>
      <p>Price: {data['05. price']}</p>
      <p>Volume: {data['06. volume']}</p>
      <p>Last trading day: {data['07. latest trading day']}</p>
    </div>
  );
};

export default StockData;
