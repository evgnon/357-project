import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

const StockTable = () => {
  const [stockData, setStockData] = useState([]);

  const stockNames = ['Apple Inc.', 'Alphabet Inc. (Google)', 'Microsoft Corporation', 'Amazon.com, Inc.', 'Tesla', 'Netflix, Inc.', 'NVIDIA Corporation', 'PayPal Holdings, Inc.', 'JPMorgan Chase & Co.'];
  const symbols = ['AAPL', 'GOOG', 'MSFT', 'AMZN', 'TSLA', 'NFLX', 'NVDA', 'PYPL', 'JPM'];

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
    <Box borderRadius={30} overflow="hidden">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}
        style={{ maxHeight: "100px" }}
        size="small"
        aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell align="left"
              style={{
                color: "#4B4A54",
                padding: "18px",
                fontSize: "20px",
                fontWeight: "600px",
                borderBottom: "1px solid grey",
              }}>Name</TableCell>
            <TableCell align="left"
              style={{
                color: "#4B4A54",
                padding: "18px",
                fontSize: "20px",
                fontWeight: "600px",
                borderBottom: "1px solid grey",
              }}>Ticker</TableCell>
            <TableCell align="center"
              style={{
                color: "#4B4A54",
                padding: "18px",
                fontSize: "20px",
                fontWeight: "600px",
                borderBottom: "1px solid grey",
              }}>Price</TableCell>
            <TableCell align="center"
              style={{
                color: "#4B4A54",
                padding: "18px",
                fontSize: "20px",
                fontWeight: "600px",
                borderBottom: "1px solid grey",
              }}>Change</TableCell>
            <TableCell align="center"
              style={{
                color: "#4B4A54",
                padding: "18px",
                fontSize: "20px",
                fontWeight: "600px",
                borderBottom: "1px solid grey",
              }}>Percent Change</TableCell>
            <TableCell align="center"
              style={{
                color: "#4B4A54",
                padding: "18px",
                fontSize: "20px",
                fontWeight: "600px",
                borderBottom: "1px solid grey",
              }}>High</TableCell>
            <TableCell align="center"
              style={{
                color: "#4B4A54",
                padding: "18px",
                fontSize: "20px",
                fontWeight: "600px",
                borderBottom: "1px solid grey",
              }}>Low</TableCell>
            <TableCell align="center"
              style={{
                color: "#4B4A54",
                padding: "18px",
                fontSize: "20px",
                fontWeight: "600px",
                borderBottom: "1px solid grey",
              }}>Open</TableCell>
            <TableCell align="right"
              style={{
                color: "#4B4A54",
                padding: "18px",
                fontSize: "20px",
                fontWeight: "600px",
                borderBottom: "1px solid grey",
              }}>Previous Close</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockData.map((data, index) => (
            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" align="left"
                style={{
                  padding: "18px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "grey"

                }}>
                {stockNames[index]}
              </TableCell>
              <TableCell component="th" scope="row" align="left"
                style={{
                  padding: "18px",
                  fontSize: "16px",
                  fontWeight: "400px",
                  color: "grey"

                }}>
                {symbols[index]}
              </TableCell>
              <TableCell align="center" style={{
                  padding: "18px",
                  fontSize: "16px",
                  fontWeight: "500px",
                  color: "grey"
                }}>${data.c.toFixed(2)}</TableCell>
              <TableCell align="center" style={{
                  padding: "18px",
                  fontSize: "16px",
                  fontWeight: "500px",
                  color: (data.c-data.pc) < 0 ? "#E03B3B" : "#4F8800"
                }}>
                ${(data.c - data.pc).toFixed(2)}
              </TableCell>
              <TableCell align="center" style={{
                  padding: "18px",
                  fontSize: "16px",
                  fontWeight: "500px",
                  color: (data.c-data.pc) < 0 ? "#E03B3B" : "#4F8800"
                }}>
                {(((data.c-data.pc)/data.pc)*100).toFixed(2)}%
              </TableCell>
              <TableCell align="center" style={{
                  padding: "18px",
                  fontSize: "16px",
                  fontWeight: "500px",
                  color: "grey"
                }}>${data.h.toFixed(2)}</TableCell>
              <TableCell align="center" style={{
                  padding: "18px",
                  fontSize: "16px",
                  fontWeight: "500px",
                  color: "grey"
                }}>${data.l.toFixed(2)}</TableCell>
              <TableCell align="center" style={{
                  padding: "18px",
                  fontSize: "16px",
                  fontWeight: "500px",
                  color: "grey"
                }}>${data.o.toFixed(2)}</TableCell>
              <TableCell align="right" style={{
                  padding: "18px",
                  fontSize: "16px",
                  fontWeight: "500px",
                  color: "grey"
                }}>
                ${data.pc.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
};

export default StockTable;
