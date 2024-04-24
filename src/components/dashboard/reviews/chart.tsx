import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { REVIEWS_CHART_DATA } from "../../../utils/constants";

const ApexChart: React.FC = () => {
  const [series] = useState<number[]>([20, 10, 25, 30, 15]);
  const [options] = useState<Object>(REVIEWS_CHART_DATA);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={500}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
