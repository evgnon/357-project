import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import logo from "../Assets/logo.png"
import Divider from '@mui/material/Divider';


const StockListItem = () => {
    return(
        <>
        <Box style={{ display: "flex",marginTop : "15px" }}>
          <img src={logo} alt="" style={{ maxWidth: "40px" }} />
          <Typography style={{marginLeft : "10px"}}variant="h5" color="black" component="h2" >
            Tesla
          </Typography>
          <Box style={{marginLeft : "100px",maxWidth : "250x"}}>

          <Typography color="textSecondary" >TSLA</Typography>
          <Typography color="orange">+40</Typography>
            
          </Box>
        </Box>
        <Divider/>
        </>
    )
}
export default StockListItem;