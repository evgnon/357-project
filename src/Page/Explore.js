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
import ExploreStock from "../Components/Explore/ExploreStock";
import Catogories from "../Components/Explore/Catogories"
import Table1 from "../Components/Explore/Table1";
const Account= () => {
  return (
    <Grid spacing={2}>
      

      <Grid container item xs={12} spacing={2} style={{ padding: "20px" }}>
        <Grid item xs={12} sm={4} >
          <Balance />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ExploreStock/>
        </Grid>
        <Grid item xs={12} sm= {4}>
          
          <Catogories/>
        </Grid>
      </Grid>

      <Grid container item xs={12} spacing={2} style={{ padding: "20px" }}>
      <Grid item xs={12} sm={12} >
        <Table1/>
      </Grid>
      
      </Grid>
    </Grid>
  );
};
export default Account;
