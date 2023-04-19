import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "../Assets/2.png";
import LineChart from "./LineChart";

function Balance() {
  return (
    <Card style={{width : "100%", borderRadius : "20px",padding : "10px" }}>
      <CardContent>
        <h3 style={{ fontWeight: "20px" }}>Balance</h3>

        <Box style={{ display: "flex" }}>
          <div
            style={{
              borderRadius: "20px",
              paddingInline: "40px",
              flex : "3",
              background: "orange",
            }}
          >
            <h4>$20,000</h4>
          </div>
          <div
            style={{
              borderRadius: "20px",
              paddingInline: "10px",
              textAlign:"center",
              marginLeft: "10px",
              background: "#9eff9e"
            }}
          >
            <h4>+ 5.00%</h4>
          </div>
        </Box>
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ fontWeight: "20px" }}>Invested</h3>
        </div>

        <Box style={{ display: "flex", marginTop: "10px",background: "black",borderRadius : "20px" }}>
          
            <h4 style={{ color: "white",marginLeft : "40px" }}>$15,000</h4>

            <div
            style={{
              borderRadius: "20px",
              paddingBlock: "10px",
              marginRight : "20px",
              width: "100%",
              display: "flex",
              justifyContent : "flex-end",
              alignItems:"center"
            }}
          >
            <Button
              style={{  background: "orange" }}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            ></Button>
          </div>
        </Box>

        <h4 style={{ color: "grey" }}>Top Stock</h4>
        <Box style={{ display: "flex" }}>
          <img
            src={logo}
            alt=""
            style={{ marginLeft: "15px", maxWidth: "40px" }}
          />
          <Typography
            style={{ marginLeft: "10px" }}
            variant="h6"
            color="black"
            component="h2"
          >
            Tesla
          </Typography>
          <Box style={{display : "flex",justifyContent : "flex-end",width : "100%"}}>

          <Box >
            <Typography color="textSecondary">TSLA</Typography>
            <Typography color="orange">+40</Typography>
          </Box>
          </Box>
        </Box>

        <Box style={{ display: "flex",marginTop : "5px",display : "flex"}}>
          
          <Box style={{ marginLeft: "7px", maxWidth: "200x",flex : "2" }}>
            <h4 style={{ color: "grey" }}>Invested Value</h4>
            <h4>$20</h4>
          </Box>
          <Box style={{ marginLeft: "30px", maxWidth: "200x",flex : "2" }}>
            <h4 style={{ color: "grey" }}>Current Value</h4>
            <h4>$2000</h4>
          </Box>
          <Box style={{marginTop : "19px", flex : "1"}}>
          <LineChart color ={"rgb(247 241 241)"}/>
        </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
export default Balance;
