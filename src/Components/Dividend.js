import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import DividendGraph from "./DividendGraph";
import { Box } from "@mui/material";

const Dividend = () => {
  return (
    <Card
      style={{
        borderRadius: "20px",
        marginRight: "20px",
        padding: "10px",
        height : "600px",
        width : "100%"
      }}
    >
      <CardContent>
        <h3>Projected Dividend</h3>
        <DividendGraph />

        <Box style={{ display: "flex", marginTop: "5px" }}>
          <Box style={{ marginLeft: "7px" }}>
            <h4 style={{ color: "grey" }}>Annual Dividend</h4>
            <h4>$960</h4>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Box style={{ width: "200x" }}>
              <h4 style={{ color: "grey" }}>Monthly Dividend</h4>
              <h4>$2000</h4>
            </Box>
          </Box>
        </Box>
        <Box style={{ display: "flex"}}>
          <Box style={{ }}>
            <h4 style={{ color: "grey" }}>Yield</h4>
            <h4>1.16%</h4>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
          <Box style={{ marginRight : "35px",height : "auto" }}>
            <h4 style={{ color: "grey" }}>Yield on Cost</h4>
            <h4>14.0%</h4>
          </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
export default Dividend;
