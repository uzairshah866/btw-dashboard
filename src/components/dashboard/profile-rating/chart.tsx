import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { RATINGS_CHART_DATA } from "../../../utils/constants";

const ApexChart: React.FC = () => {
  const [series] = useState<number[]>([11, 89]);
  const [options] = useState<Object>(RATINGS_CHART_DATA);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={340}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
