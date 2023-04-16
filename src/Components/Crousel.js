import React from "react";
import logo from "../Assets/logo.png";
import BasicFilm from "react-film";
import Stock from "./Stock";
import Stock2 from "./Stock2";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import "../Style/crousel.css"
import Carousel from "react-elastic-carousel";
function Carousels(props) {
  const NextButton = () => {
    return (
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        style={{ color: "black", marginLeft: "170px" }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    );
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 576, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
  ];
  
  return (
    <Box style={{background: "white", borderRadius: "20px", padding: "20px" }}>
       <Carousel  breakPoints={breakPoints} showArrows={false}  >
           
        <Stock />
        <Stock2 />
        <Stock />
        <Stock2 />
        <Stock />
        <Stock2 />
        <Stock />
        <Stock2 />
        <Stock />
        <Stock2 />
        <Stock />
        <Stock2 />
      </Carousel>
      {/* </BasicFilm> */}
    </Box>
  );
}
export default Carousels;
