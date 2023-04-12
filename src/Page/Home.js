import { Grid } from "@mui/material";
import React from "react";
import Carousel from "../Components/Crousel";
import Typography from "@mui/material/Typography";
const Home = () => {
  return (
    <Grid spacing={2}>
      <Grid item xs={12} style={{border : "2px solid black",padding : "20px"}}>
        <Typography variant="h5" color={"black"}>My Stocks</Typography>
       <Carousel/>
      </Grid>
      <Grid item xs={12} style={{border : "2px solid black"}}>
       Balance
      </Grid>
      <Grid item xs={12} style={{border : "2px solid black"}}>
       Analytics
      </Grid>




    </Grid>
  );
};
export default Home;
