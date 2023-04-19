import { Grid } from "@mui/material";
import React from "react";
import Carousels from "../Components/Crousel";
import Typography from "@mui/material/Typography";
import Balance from "../Components/Balance";
import Dividend from "../Components/Dividend";
import WatchList from "../Components/WatchList";
import Limit from "../Components/Limit"
import Portfolio from "../Components/Portfolio";
import Limit2 from "../Components/Limit2";
const Account= () => {
  return (
    <Grid spacing={2}>
      <Grid item xs={12} style={{ padding: "20px" }}>
        <h2>
          My Stocks
        </h2>
        <Carousels />
      </Grid>

      <Grid container item xs={12} spacing={2} style={{ padding: "20px" }}>
        <Grid item xs={12} sm={4} >
          <Balance />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Dividend/>
        </Grid>
        <Grid item xs={12} sm= {4}>
          <WatchList/>
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={2} style={{ padding: "20px" }}>
      <Grid item xs={12} sm={8} >
        <Portfolio/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Limit/>
        <Limit2/>
      </Grid>
      </Grid>
    </Grid>
  );
};
export default Account;
