import React from "react";
import { AreaChart,Area,Tooltip,XAxis,YAxis} from "recharts";
import data2 from "../Data/data2";
const DividendGraph = () => {
  return (
    <AreaChart
      width={380}
      height={250}
      data={data2}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
        <YAxis />
        <XAxis dataKey="name" />
      <Area
        type="monotone"
        dataKey="pv"
        stroke="red"
        fillOpacity={10}

        fill={"rgb(247 241 248)"}
      />
    </AreaChart>
  );
};

export default DividendGraph;