import { Box } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import ExploreStock2 from "../Components/Schedule/ExploreStock2";
import Grid from "@mui/material/Grid";
import Schedule2 from "../Components/Schedule/Schedule2"
const Schedule = () => {
  return (
    <>
    <Box style={{ width: "100%", display: "flex", marginTop: "50px" }}>
      <h1
        style={{ fontSize: "40px", marginBottom: "0px", marginLeft: "100px" }}
      >
        Schedule
      </h1>
      <Box
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
        <Button
          variant="contained"
          style={{
              width: "120px",
              background: "orange",
              height: "30px",
              marginTop: "40px",
              marginRight: "90px",
            }}
        >
          Back
        </Button>
      </Box>
    </Box>
      <Grid container item xs={12} spacing={6} style={{ padding: "20px",marginLeft: "20px"}}>
        <Grid item xs={12} sm={6} >
          <ExploreStock2 />
        </Grid>
        <Grid item xs={12} sm={4.4}>
          <Schedule2/>
          
        </Grid>
      </Grid>
            </>
  );
};
export default Schedule;
