import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

const Limit2 = () => {
  return (
    <Card
      style={{
        borderRadius: "20px",
        marginRight: "20px",
        marginTop: "15px",
      }}
    >
      <CardContent>
        <Box style={{ display: "flex",height : "60px" }}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            style={{
              color: "black",
              background: "orange",
              height: "40px",
              width: "40px",
              marginTop :"22px",
              marginLeft : "20px"

            }}
          >
            <ArrowForwardIcon />
          </IconButton>
          <h1 style={{ color: "#d5d5d5", marginLeft: "280px",marginTop :"14px" }}>15</h1>
        </Box>
        <Box style={{marginTop :"5px"}}>
        <h3 style={{ color: "#d5d5d5",marginTop: "0px" }}>Total Transaction this week</h3>

        </Box>
      </CardContent>
    </Card>
  );
};
export default Limit2;
