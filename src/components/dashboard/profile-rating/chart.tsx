import React from "react";
import CustomChart from "../../shared/chart";

const Chart: React.FC = () => {
  const options = {
    height: 300,
    animationEnabled: true,
    subtitles: [
      {
        text: "4.1",
        verticalAlign: "center",
        fontSize: 42,
        dockInsidePlotArea: true,
        fontColor: "#D39890",
      },
    ],
    data: [
      {
        startAngle: 270,
        type: "doughnut",
        showInLegend: true,
        // indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          {
            name: "Overall Percentage",
            y: 89,
            color: "#E3E3E3",
          },
          {
            name: "Current Percentage",
            y: 11,
            exploded: true,
            color: "#D39890",
          },
        ],
      },
    ],
    legend: {
      verticalAlign: "center",
      horizontalAlign: "right",
      reversed: true,
      cursor: "pointer",
    },
  };

  return (
    <div>
      <CustomChart options={options} />
    </div>
  );
};

export default Chart;
