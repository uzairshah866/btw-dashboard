import React from "react";
import Chart from "./chart";
import styles from "../../../global.module.scss";
import CustomSelect from "../../shared/select";

export default function ProfileRating() {
  return (
    <div style={{ marginTop: 10 }}>
      <div className={styles.box}>
        <div className={styles.header}>
          <div className={styles.label}>Profile Rating</div>
          <CustomSelect />
        </div>

        <Chart />
      </div>
    </div>
  );
}
