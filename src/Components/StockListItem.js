import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import logo from "../Assets/2.png";
import Divider from "@mui/material/Divider";

const StockListItem = () => {
  return (
    <>
      <Box style={{ display: "flex", marginTop: "15px", width: "100%" }}>
        <img src={logo} alt="" style={{ maxWidth: "40px" }} />
        <Box>
          <Typography
            style={{ marginLeft: "16px", color: "black" }}
            variant="h6"
          >
            Tesla
          </Typography>
          <Typography style={{ marginLeft: "16px" }} color="textSecondary">
            TSLA
          </Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "flex-end",width : "100%" }}>
          <Box >
            <Typography style={{ color: "black" }} variant="h6">
              $102.5
            </Typography>
            <Typography style={{ color: "orange" }} variant="subtitle1">
              +40
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};
export default StockListItem;
