import React from "react";
import logo from "../Assets/logo.png";
import BasicFilm from "react-film";
import Stock from "./Stock";
import Stock2 from "./Stock2";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Carousel(props) {
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
  return (
    <div style={{ background: "white", borderRadius: "20px", padding: "20px" }}>
      <BasicFilm
        nextButton={NextButton}
        itemPadding={20}
        style={{ padding: "220px" }}
        showDots={false}
        showScrollBar={false}
      >
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
      </BasicFilm>
    </div>
  );
}
export default Carousel;
