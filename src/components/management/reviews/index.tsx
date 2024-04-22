import React from "react";
import CustomTable from "../../shared/table";
import { colors } from "../../../utils/colors";
import styles from "../../../global.module.scss";
import MUIButton from "../../../components/shared/button";
import { ArrowDownwardOutlinedIcon } from "../../../utils/icons";

export default function Review() {
  return (
    <main className={styles.main}>
      <CustomTable />
      <div>
        <MUIButton
          text="Delete"
          color="inherit"
          sx={{
            px: 2,
            textTransform: "capitalize",
            backgroundColor: colors.danger,
            color: colors.white,
            "&:hover": {
              backgroundColor: colors.danger,
              color: colors.white,
            },
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <MUIButton
          text={
            <div style={{ display: "flex", alignItems: "center" }}>
              <ArrowDownwardOutlinedIcon fontSize="small" /> Export Selected
            </div>
          }
          color="inherit"
          sx={{
            px: 2,
            textTransform: "capitalize",
            backgroundColor: colors.primary,
            color: colors.white,
            "&:hover": {
              backgroundColor: colors.primary,
              color: colors.white,
            },
          }}
        />
      </div>
    </main>
  );
}
