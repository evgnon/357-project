import React from "react";
import logo from "../Assets/logo.png"
import BasicFilm from "react-film";
import Stock from "./Stock";

function Carousel(props) {
  return (
   


    <div style={{background : "white",borderRadius : "20px",padding : "20px"}}>

    <BasicFilm showDots = {false} showScrollBar={false}>
      <Stock/>
      <Stock/>
      <Stock/>
      <Stock/>
      <Stock/>
      <Stock/>

    </BasicFilm>
    </div>
  );
}
export default Carousel;
