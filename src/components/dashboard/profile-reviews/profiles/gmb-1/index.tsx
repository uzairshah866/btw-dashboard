import React from "react";
import { colors } from "../../../../../utils/colors";
import MUIButton from "../../../../shared/button";
import CustomAccordions from "../../../../shared/custom-accordian";

export default function GMB1() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <div style={{ color: colors.grayText }}>
          You have <span style={{ color: colors.primary }}>769</span> total bad
          reviews!
        </div>
        <MUIButton
          text={
            <div style={{ display: "flex", alignItems: "center" }}>
              Remove Now
            </div>
          }
          color="inherit"
          sx={{
            px: 2,
            textTransform: "capitalize",
            backgroundColor: colors.disable,
            color: colors.white,
            "&:hover": {
              backgroundColor: colors.disable,
              color: colors.white,
            },
          }}
        />
      </div>
      <div>
        <CustomAccordions
          name="1-Star Reviews"
          count={231}
          probability="Removal Probability: 99%"
        />
        <CustomAccordions
          name="2-Star Reviews"
          count={368}
          probability="Removal Probability: 99%"
        />
        <CustomAccordions
          name="3-Star Reviews"
          count={77}
          probability="Removal Probability: 99%"
        />
      </div>
    </>
  );
}
