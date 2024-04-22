import React from "react";
import Chart from "./chart";
import styles from "../../../global.module.scss";
import { TuneIcon } from "../../../utils/icons";

export default function Reviews() {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.header}>
          <div className={styles.label}>Reviews</div>
          <TuneIcon sx={{ color: "#1370A4", cursor: "pointer" }} />
        </div>
        <Chart />
      </div>
    </>
  );
}
