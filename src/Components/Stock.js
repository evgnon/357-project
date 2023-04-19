import React from "react";
import logo from "../Assets/2.png";
import { Box } from "@mui/material";
import LineChart from "./LineChart";
import { Card, CardContent, Typography } from "@material-ui/core";
import { ResponsiveContainer } from "recharts";

const Stock = () => {
  return (
    <Card style={{minWidth : "sm",borderRadius : "20px",marginRight : "20px",background :"rgb(247 241 241)"}}>
      <CardContent  >
        <Box style={{ display: "flex" }}>
          <img src={logo} alt="" style={{ maxWidth: "40px" }} />
          <Typography style={{marginLeft : "10px", marginTop: "10px"}}variant="h5" color="black" component="h2" >
            Tesla
          </Typography>
          <Box style={{marginLeft : "60px",maxWidth : "200x", marginTop: "10px"}}>

          <Typography color="textSecondary" >TSLA</Typography>
          <Typography color="orange">+40</Typography>
            
          </Box>
        </Box>
        <Box style={{marginTop : "30px",display : "flex"}}>
        <Box>

        <Typography color="textSecondary">Current Value</Typography>
        <Typography color="black" variant="h5">$25</Typography>
        </Box>
        <Box style={{marginLeft : "40px"}}>
      
          <LineChart color ={"rgb(247 241 241)"}/>
        </Box>


        </Box>
      </CardContent>
    </Card>
  );
};
export default Stock;
