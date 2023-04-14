import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { AreaChart, Area } from "recharts";
import { Box } from "@mui/material";
import data3 from "../Data/data3";
import { Divider } from "@mui/material";

const Portfolio = () => {
  return (
    <Card style={{ borderRadius: "20px", padding: "10px" }}>
      <CardContent>
        <Box display={"flex"}>
          <h3>Portfolio Analytics</h3>
          <Box
            style={{
              width: "100%",
              marginTop: "5px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="text" clicked>
              <h3 style={{ color: "red" }}>1D</h3>
            </Button>

            <Button variant="text">
              <h3 style={{ color: "#bf9f9f" }}>5D</h3>
            </Button>
            <Button variant="text">
              <h3 style={{ color: "#bf9f9f" }}>1M</h3>
            </Button>
            <Button variant="text">
              <h3 style={{ color: "#bf9f9f" }}>6M</h3>
            </Button>
            <Button variant="text">
              <h3 style={{ color: "#bf9f9f" }}>1Y</h3>
            </Button>
            <Button variant="text">
              <h3 style={{ color: "#bf9f9f" }}>5Y</h3>
            </Button>
          </Box>
        </Box>
        <ResponsiveContainer width="95%" height={250}>
          <AreaChart data={data3}>
            <XAxis dataKey="date" />
            <YAxis
              dataKey="price"
              domain={["dataMin-5", "dataMax"]}
              orientation="right"
            />
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
      </CardContent>
    </Card>
  );
};
export default Portfolio;
