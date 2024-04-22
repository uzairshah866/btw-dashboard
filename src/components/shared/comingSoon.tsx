import React from "react";
import { Typography } from "@mui/material";
import { colors } from "../../utils/colors";

const ComingSoon: React.FC = () => {
  return (
    <Typography
      component="h1"
      variant="h3"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 90px)",
        fontWeight: 700,
        color: colors.primary,
      }}
    >
      Coming Soon
    </Typography>
  );
};

export default ComingSoon;
