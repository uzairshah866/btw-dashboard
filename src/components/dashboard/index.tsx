import React from "react";
import Reviews from "./reviews";
import { Grid } from "@mui/material";
import ProfileStats from "./profile-stats";
import ProfileRating from "./profile-rating";
import ProfileReviews from "./profile-reviews";

export default function Dashboard() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item sm={12} lg={7}>
        <Reviews />
      </Grid>
      <Grid item sm={12} lg={5}>
        <ProfileStats />
        <ProfileRating />
      </Grid>
      <Grid item sm={12} lg={12}>
        <ProfileReviews />
      </Grid>
    </Grid>
  );
}
