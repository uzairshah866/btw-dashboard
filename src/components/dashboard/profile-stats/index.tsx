import React from "react";
import { Grid } from "@mui/material";
import arrows from "../../../assets/arrows.svg";
import styles from "../../../global.module.scss";

export default function ProfileStats() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={6} lg={6}>
        <div className={styles.deletedReviews}>
          <div className={styles.label}>Deleted Reviews</div>
          <div className={styles.value}>102</div>
          <div style={{ position: "absolute", bottom: -10, left: 0 }}>
            <img alt="svg" src={arrows} />
          </div>
        </div>
      </Grid>
      <Grid item sm={6} lg={6}>
        <div className={styles.improvedProfiles}>
          <div className={styles.label}>Improved Profiles</div>
          <div className={styles.value}>22%</div>
          <div style={{ position: "absolute", bottom: -10, left: 0 }}>
            <img alt="svg" src={arrows} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
