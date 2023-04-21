import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from 'react-router-dom';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@mui/material";
import { AreaChart, Area } from "recharts";
import { Box } from "@mui/material";
import data3 from "../../Data/data3";
import logo from "../../Assets/2.png";

const ExploreStock2 = () => {
  return (
    <Card style={{ borderRadius: "20px", padding: "10px" }}>
      <CardContent>
        <Box
          style={{
            width: "100%",
            marginTop: "2px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            style={{ color: "white", fontSize: "15px", background: "orange" }}
            clicked
            variant="contained"
          >
            Nasdaq
          </Button>

          <Button style={{ color: "grey", fontSize: "15px" }}>SSE</Button>
          <Button style={{ color: "grey", fontSize: "15px" }}>EURO</Button>
          <Button style={{ color: "grey", fontSize: "15px" }}>BSE</Button>
          <Link to="/explore">
          <Button
            style={{ color: "white", fontSize: "15px", background: "#FF5C00" }}
            clicked
            variant="contained"
          >
            Back
          </Button>
          </Link>
        </Box>

        <Box
          style={{
            width: "100%",
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            style={{ color: "red", fontSize: "15px" }}
            clicked
            variant="text"
          >
            1D
          </Button>

          <Button style={{ color: "grey", fontSize: "15px" }} variant="text">
            5D
          </Button>
          <Button style={{ color: "grey", fontSize: "15px" }} variant="text">
            1M
          </Button>
          <Button style={{ color: "grey", fontSize: "15px" }} variant="text">
            6M
          </Button>
          <Button style={{ color: "grey", fontSize: "15px" }} variant="text">
            1Y
          </Button>
        </Box>
        <ResponsiveContainer width="90%" height={200}>
          <AreaChart data={data3}>
            <XAxis dataKey="date" />
            <YAxis dataKey="price" domain={["dataMin-5", "dataMax"]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              fill={"rgb(247 241 248)"}
              dataKey="price"
              stroke="black"
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>

        <Box style={{ display: "flex", width: "100%" }}>
          <img src={logo} alt="" style={{ maxWidth: "40px" }} />

          <h3 style={{ marginLeft: "10px" }}>Tesla</h3>

          <Box
            style={{
              display: "flex",
              marginTop: "10px",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <Button
              style={{
                color: "white",
                fontSize: "15px",
                background: "#7CC644",
                justifySelf: "flex-end",
                height: "35px",
              }}
            //   clicked
              variant="contained"
            >
              Buy Tesla
            </Button>
          </Box>
        </Box>
        <Box style={{ display: "flex", width: "100%",marginTop :"25px" }}>
          <Box>
            
            <h2 style={{marginBottom :"0px"}}>37,856.74<span style={{fontSize :"10px",color :"grey",marginLeft :"5px"}}>CAD</span></h2>
            <span style={{marginTop : "0px",fontWeight : "10px",fontSize : "12px",color : "#ff0000"}}>+11,157.39(41.79%)</span>
            
          </Box>

          <Box
            style={{
              display: "flex",
              marginTop: "10px",
              width: "100%",
              justifyContent: "flex-end",
              marginTop : "25px"
            }}
          >
            <Button
              style={{
                color: "white",
                fontSize: "15px",
                background :"#00CAF6",
                justifySelf: "flex-end",
                height: "35px",
              }}
              clicked
              variant="contained"
            >
              ADD TO WATCHLIST
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
export default ExploreStock2;
