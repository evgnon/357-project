import { Grid } from "@mui/material";
import React from "react";
import Carousel from "../Components/Crousel";
import Typography from "@mui/material/Typography";
import Balance from "../Components/Balance";
import Dividend from "../Components/Dividend";
import WatchList from "../Components/WatchList";
const Home = () => {
  return (
    <Grid spacing={2}>
      <Grid item xs={12} style={{ padding: "20px" }}>
        <Typography variant="h5" color={"black"}>
          My Stocks
        </Typography>
        <Carousel />
      </Grid>

      <Grid container spacing={2} style={{ padding: "20px" }}>
        <Grid item xs={4} >
          <Balance />
        </Grid>
        <Grid item xs={4} >
          <Dividend/>
        </Grid>
        <Grid item xs={4} >
          <WatchList/>
        </Grid>
      </Grid>

      <Grid item xs={12} style={{ border: "2px solid black" }}>
        Analytics
      </Grid>
    </Grid>
  );
};
export default Home;
