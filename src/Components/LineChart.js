import React from "react";
import { AreaChart,Area,Tooltip} from "recharts";
import data from "../Data/data";
const LineChart = () => {
  return (
    <AreaChart
      width={140}
      height={80}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      
 

      
      <Area
        type="monotone"
        dataKey="pv"
        stroke="red"
        fillOpacity={10}
        fill="rgb(247 241 248)"
      />
    </AreaChart>
  );
};

export default LineChart;