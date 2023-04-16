import React from "react";
import logo from "../Assets/logo.png";
import { Box } from "@mui/material";
import LineChart from "./LineChart";
import { Card, CardContent, Typography } from "@material-ui/core";

const Stock2 = () => {
  return (
    <Card
      style={{
        borderRadius: "20px",
        marginRight: "20px",
        background: "black"
      }}
    >
      <CardContent>
        <Box style={{ display: "flex" }}>
          <img src={logo} alt="" style={{ maxWidth: "40px" }} />
          <Typography
            style={{ marginLeft: "10px",color : "white" }}
            variant="h5"
            color="black"
            component="h2"
          >
            Tesla
          </Typography>
          <Box style={{ marginLeft: "100px", maxWidth: "200x" }}>
            <Typography style={{color : "white" }}>TSLA</Typography>
            <Typography style={{color : "white" }}>+40</Typography>
          </Box>
        </Box>
        <Box style={{ marginTop: "30px", display: "flex" }}>
          <Box>
            <Typography style={{color : "white" }} color="textSecondary">Current Value</Typography>
            <Typography  style={{color : "white" }} variant="h5">
              $25
            </Typography>
          </Box>
          <Box style={{ marginLeft: "100px" }}>
            <LineChart color={"white"} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
export default Stock2;
