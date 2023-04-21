import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import logo from "../Assets/2.png";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from 'react';
import axios from 'axios';

const StockItem = (symbol, stockName) => {
    const [stockData, setStockData] = useState([]);
    const symbols = symbol
    const stockNames = stockName
    useEffect(() => {
        const fetchData = async () => {
          
          const requests = symbols.map(symbol =>
            axios.get('https://finnhub.io/api/v1/quote', {
              params: {
                symbol,
                token: 'ccagqeiad3i0kro2tvtg',
              },
            })
          );
          const responses = await Promise.all(requests);
          const data = responses.map(response => response.data);
          setStockData(data);
        };
        fetchData();
      }, []);
  return (
    <>
      <Box style={{ display: "flex", marginTop: "15px", width: "100%" }}>
        <img src={logo} alt="" style={{ maxWidth: "40px" }} />
        <Box>
          <Typography
            style={{ marginLeft: "16px", color: "black" }}
            variant="h6"
          >
            {stockNames[0]}
          </Typography>
          <Typography style={{ marginLeft: "16px" }} color="textSecondary">
            {symbols[0]}
          </Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "flex-end",width : "100%" }}>
          <Box >
            <Typography style={{ color: "black" }} variant="h6">
              ${data.c.toFixed(2)}
            </Typography>
            <Typography style={{ color: "orange" }} variant="subtitle1">
              +40
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};
export default StockItem;
