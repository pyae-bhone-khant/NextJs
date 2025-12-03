"use client";

import React from "react";
import { Chart } from "react-google-charts";
import { Box, Typography } from "@mui/material";

const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 300],
  ["2016", 660, 1120, 150],
  ["2017", 1030, 540, 250],
];

const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, Profit",
  },
  bars: "vertical",
  colors: ["rgb(53 , 138 , 148)" , "rgb(37,11,165)" , "#188310"],
  bar: { groupWidth: "40%" }, // 👉 makes bars thinner
};



export default function Barcharts() {
  return (
    <Box >
      
      <Chart
        chartType="Bar"
        width="100%"
        height="480px"
        data={data}
        options={options}
      />
    </Box>
  );
}
