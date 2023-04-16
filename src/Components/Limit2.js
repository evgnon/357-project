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
        <Box style={{ display: "flex", height: "60px", width: "100%" }}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            style={{
              color: "black",
              background: "orange",
              height: "40px",
              width: "40px",
              marginTop: "22px",
              marginLeft: "20px",
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
          <Box style={{ display: "flex", justifyContent: "flex-end",width : "100%",marginTop : "20px" }}>
            <h1 style={{ color: "#d5d5d5", marginLeft: "", marginTop: "0px" }}>
              15
            </h1>
          </Box>
        </Box>
        <Box style={{ marginTop: "15px" }}>
          <h3 style={{ color: "#d5d5d5" }}>
            Total Transaction this week
          </h3>
        </Box>
      </CardContent>
    </Card>
  );
};
export default Limit2;
