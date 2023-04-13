import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Limit = () => {
  const percentage = 75;
  return (
    <Card
      style={{
        borderRadius: "20px",
        marginRight: "20px",
      }}
    >
      <CardContent>
        <Box style={{ display: "flex", padding: "20px" }}>
          <Box>
            <h4 style={{ color: "#d5d5d5" }}>
              You have reach 75% of your daily deposit limit of $2000
            </h4>
            <h4 style={{color : "#ffbf4b",marginTop : "57px",cursor :"pointer"}}>
                Expand Limit
            </h4>
          </Box>
          <Box style={{ marginLeft: "30px" }}>
            <CircularProgressbar
              styles={{
                path: { stroke: "orange" },
                text: { fill: "black" },
                width: "80px",
                height: "100px",
                marginLeft: "10px",
              }}
              value={percentage}
              text={`${percentage}%`}
            />
            <h4 style={{ color: "#d5d5d5", marginLeft: "43px" }}>Limit</h4>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
export default Limit;
