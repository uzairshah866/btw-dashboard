import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { colors } from "../../utils/colors";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  AccountCircle,
  SettingsOutlinedIcon,
  NotificationsOutlinedIcon,
  ArrowDropDownOutlinedIcon,
} from "../../utils/icons";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* sticky navbar */}
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          ml: "200px",
          width: "calc(100vw - 270px)",
          backgroundColor: colors.white,
          color: colors.secondary,
          boxShadow: 0,
          borderBottom: `1px solid ${colors.divider}`,
          py: 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <SettingsOutlinedIcon />
            </IconButton>
            <Typography
              component="div"
              sx={{
                border: `1px solid ${colors.divider}`,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 0.4,
                cursor: "pointer",
                width: 110,
              }}
            >
              <AccountCircle
                sx={{ width: 40, height: 40, color: colors.lightOrange }}
              />
              <span>KFC</span>
              <ArrowDropDownOutlinedIcon />
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
