import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import logo from "../../Assets/logo.png";
import Divider from "@mui/material/Divider";

const CatogoriesItem = () => {
  return (
    <>
      <Box style={{ display: "flex",padding :"10px", marginTop: "15px", width: "100%",borderBottom :"1px solid grey" }}>
        <img src={logo} alt="" style={{ maxWidth: "80px" }} />
        <Box>
          <Typography
            style={{ marginLeft: "16px", color: "black",fontWeight :"250px" }}
            variant="h6"
          >
            Tesla
          </Typography>
          
        </Box>
        
      </Box>
    </>
  );
};
export default CatogoriesItem;
