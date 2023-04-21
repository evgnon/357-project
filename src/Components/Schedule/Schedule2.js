import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { Card, CardContent, Typography } from "@material-ui/core";
import logo from "../../Assets/logo.png";
import { ResponsiveContainer } from "recharts";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { doc, setDoc, query, FieldValue, collection, where } from "firebase/firestore";
import { db } from "../../firebase";

const Schedule2 = () => {

  const [target, setTarget] = useState("");
  const [quantity, setQuantity] = useState("");

  const sellAction = async (target, quantity) => {
    await setDoc(doc(db, "sales", "TSLA"), {
      targetPrice: target,
      quantity: quantity,
    });
    setTarget = "";
    setQuantity = "";
  };

  const buyAction = async (target, quantity) => {
    await setDoc(doc(db, "purchases", "TSLA"), {
      targetPrice: target,
      quantity: quantity,
    });
    setTarget = "";
    setQuantity = "";
  };

  return (
    <Card
      style={{
        borderRadius: "20px",
        marginRight: "20px",
        background: "white",
      }}
    >
      <CardContent>
        <Box style={{ marginLeft: "20px" }}>
          <h3>Schedule</h3>
          <Box style={{ display: "flex" }}>
            <img
              src={logo}
              alt=""
              style={{ maxWidth: "50px", maxHeight: "50px" }}
            />
            <Box style={{ marginLeft: "5px" }}>
              <h4
                style={{
                  marginBottom: "0px",
                  marginLeft: "0px",
                  fontSize: "18px",
                  marginTop: "0px"
                }}
              >
                TSLA
              </h4>
              <h4
                style={{ color: "grey", fontSize: "15px", marginTop: "10px", marginBottom: "10px" }}
              >
                When Stock Reaches :{target}
              </h4>
              <TextField
                id="outlined-basic"
                style={{ minWidth: "300px" }}
                variant="outlined"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
              <h4
                style={{ color: "grey", fontSize: "15px", marginTop: "15px", marginBottom: "2px" }}
              >
                For this many shares:
              </h4>
              <TextField
                id="outlined-basic"
                style={{ minWidth: "300px", height: "10px", marginTop: "0px" }}
                variant="outlined"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                  marginTop: "18px"
                }}
              >
                <h6 style={{ marginBottom: "0px" }}>Disclaimer</h6>
                <h6 style={{ textAlign: "center", marginTop: "0px" }}>
                  We will not advise you of this transaction beforehand. Your
                  selection is the sole authorization of this
                </h6>
                <Button variant="contained" style={{ background: "orange", width: "150px" }} onClick={() => sellAction(target, quantity)}>Sell</Button>
                <Button variant="contained" style={{ background: "rgb(144, 144, 255)", width: "150px", marginTop: "20px" }} onClick={() => buyAction(target, quantity)}>Purchase</Button>
              </Box>


            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
export default Schedule2;
