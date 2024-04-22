import React from "react";
import { Grid } from "@mui/material";
import CustomChart from "../../shared/chart";
import styles from "../../../global.module.scss";

const Chart: React.FC = () => {
  const options = {
    height: 400,
    animationEnabled: true,
    subtitles: [
      {
        text: "100%",
        verticalAlign: "center",
        fontSize: 42,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        starAngle: 180,
        type: "doughnut",
        showInLegend: false,
        // indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          {
            name: "1 start",
            y: 20,
            color: "#FF902A",
          },
          {
            name: "2 start",
            y: 10,
            color: "#FACF55",
          },
          {
            name: "3 start",
            y: 20,
            color: "#FF0000",
          },
          {
            name: "4 start",
            y: 30,
            color: "#6758F3",
          },
          {
            name: "5 start",
            y: 25,
            color: "#34AA44",
          },
        ],
      },
    ],
  };

  return (
    <Grid container>
      <Grid item sm={8} lg={8} sx={{ height: 460 }}>
        <CustomChart options={options} />
      </Grid>
      <Grid item sm={4} lg={4}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            height: "100%",
          }}
        >
          <Grid item sm={6} lg={6}>
            <div className={styles.legend}>
              <div className={styles.purple} />5 star
            </div>
            <div className={styles.legend}>
              <div className={styles.green} />4 star
            </div>
            <div className={styles.legend}>
              <div className={styles.red} />2 star
            </div>
          </Grid>
          <Grid item sm={6} lg={6}>
            <div className={styles.legend}>
              <div className={styles.orange} />3 star
            </div>
            <div className={styles.legend}>
              <div className={styles.yellow} />1 star
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chart;
