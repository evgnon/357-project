import React, { useRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Carousel from "react-elastic-carousel";
import Stock from "./Stock";
import logo from "../Assets/logo.png"
import AddIcon from "@mui/icons-material/Add";
import StockListItem from "./StockListItem";
import Divider from '@mui/material/Divider';
import "../Style/crousel.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const WatchList = () => {
var stat = useRef(null)

  return (
    <Card
      style={{
        borderRadius: "20px",
        marginRight: "20px",
        padding: "10px",
      }}
    >
      <CardContent>
        <Box style={{ display: "flex" }}>
          <h3>Watch list</h3>
          <div>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              
              style={{ marginLeft: "220px", marginTop: "12px",color : "black",background : "orange",borderRadius : "10px" }}
              
            >
              <AddIcon />
            </IconButton>
          </div>
        </Box>
        <div>

        <Carousel  ref={ref => (stat = ref)} itemsToShow={10} showArrows={false} style={{height : "440px"}} verticalMode>
            <StockListItem/>
            
            <StockListItem/>
            
            <StockListItem/>
           
            <StockListItem/>
            <Divider/>
            <StockListItem/>
            <Divider/>
            <StockListItem/>
            <StockListItem/>
            <StockListItem/>
            <StockListItem/>
        </Carousel>
        </div>
        <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              style={{ marginTop: "12px",justifyItems :"center",background: "orange",color :"black",marginLeft :"170px" }}
              onClick={() => {stat.slideNext()}}
            >
              <ArrowDownwardIcon />
            </IconButton>

      </CardContent>
    </Card>
  );
};
export default WatchList;
