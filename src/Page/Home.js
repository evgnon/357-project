import { Grid } from "@mui/material";
import React from "react";
import Carousel from "../Components/Crousel";
import Typography from "@mui/material/Typography";
import Balance from "../Components/Balance";
import Dividend from "../Components/Dividend";
import WatchList from "../Components/WatchList";
import Limit from "../Components/Limit"
import Portfolio from "../Components/Portfolio";
import Limit2 from "../Components/Limit2";
const Home = () => {
  return (
    <Grid spacing={2}>
      <Grid item xs={12} style={{ padding: "20px" }}>
        <h2>
          My Stocks
        </h2>
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

      <Grid container spacing={2} style={{ padding: "20px" }}>
      <Grid item xs={8} >
        <Portfolio/>
      </Grid>
      <Grid item xs={4}>
        <Limit/>
        <Limit2/>

      </Grid>
      </Grid>
    </Grid>
  );
};
export default Home;
