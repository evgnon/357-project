import React, { useRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Carousel from "react-elastic-carousel";
import AddIcon from "@mui/icons-material/Add";
import "../../Style/crousel.css"
import CatogeriesItem from "./CatogoriesItem";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Catogories= () => {
var stat = useRef(null)

  return (
    <Card
      style={{
        borderRadius: "20px",
        marginRight: "20px",
        padding: "10px",
        width : "100%"
      }}
    >
      <CardContent>
        <Box style={{ display: "flex"}}>
          
          <h3 >Catogories</h3>
          
        </Box>
        <div>

        <Carousel  ref={ref => (stat = ref)} itemsToShow={10} showArrows={false} style={{height : "420px"}} verticalMode>
            <CatogeriesItem/>
            
            <CatogeriesItem/>
            <CatogeriesItem/>
            <CatogeriesItem/>
            <CatogeriesItem/>
            <CatogeriesItem/>
            <CatogeriesItem/>
            <CatogeriesItem/>
            <CatogeriesItem/>
        <CatogeriesItem/>
        <CatogeriesItem/>
        </Carousel>
        </div>
        <Box style={{display : "flex",justifyContent : "center"}}>

        <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              style={{ marginTop: "12px",background: "#a3ffa3",color :"orange" }}
              onClick={() => {stat.slideNext()}}
              >
              <KeyboardArrowDownIcon/>
            </IconButton>
        </Box>

      </CardContent>
    </Card>
  );
};
export default Catogories ;
