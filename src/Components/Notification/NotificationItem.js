import React from "react";
import { Box } from "@mui/material";
const NotificationItem = (props) => {
  return (
    <>
      <h3>Schedules Stock purchase</h3>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          style={{
            background: "#bfbfbf",
            width: "80px",
            height: "80px",
            borderRadius: "10px",
            marginBottom: "25px"
          }}
        ></Box>

        <h4 style={{ margin: 0, marginLeft: "10px", color: "#bfbfbf",fontSize: "20px",fontWeight :"0px" }}>
          You have just become owner of 5 new Stocks
          <br />
          Nike reached your scheduled goal
        </h4>
      </Box>
    </>
  );
};
export default NotificationItem;
