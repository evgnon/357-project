import { Box } from "@mui/material";
import React from "react";
import logo from "../Assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Disclaimer = () => {
    const text= "Random text to say this is a disclaimer. If you have no money don’t join this app. If you want money join this app. Don’t spend what you don’t have. Stock values are shown in real time. However, some delays may occur and Comet will not be liable for any damages if this is the case. All Canadian Laws apply. To read more scroll"
  return (

    <Box
      style={{
        display: "flex",
        marginTop: "50px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        style={{
          display: "flex",
          marginTop: "50px",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
        }}
      >
        <img src={logo} style={{ width: "500px", height: "auto" }} alt="" />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
            background: "rgb(247 241 241)",
            border : "2px solid black",
            width: "100%",
            marginTop : "80px"
          }}
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            style={{
              marginTop: "12px",
              marginRight: "10px",
              background: "black",
              color: "white",
              alignSelf: "flex-end",
            }}
          >
            <CloseIcon />
          </IconButton>
          <h1 style={{ marginTop: "0px" }}>Disclaimer</h1>

          <TextField
            id="outlined-multiline-static"
            disabled
            multiline
            rows={5}
            value={text}
            InputLabelProps={{ style: { color: "black" } }}
            inputProps={{
              style: {
                fontSize: 20,
                color: "black",
                marginTop: "20px",
                color: "black",
              },
            }}
            style={{
              width: "80%",
              fontSize: "150px",
              background: "white",
              color: "black",
            }}
          />
          <Box style={{ display: "flex",marginTop : "50px",marginBottom : "50px" }}>
            <Button variant="contained" style={{background : "orange",height : "50px",marginRight : "320px",width : "180px"}}>Refuse</Button>
            <Button variant="contained" style={{background : "#27c727",height : "50px",width : "180px"}}>Accept</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Disclaimer;
