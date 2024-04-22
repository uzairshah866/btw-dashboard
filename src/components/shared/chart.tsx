import React from "react";
// @ts-ignore
import CanvasJSReact from "@canvasjs/react-charts";
import { CustomChartProps } from "../../interfaces/shared";
import "./chart.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CustomChart: React.FC<CustomChartProps> = ({ options }) => {
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default CustomChart;
