import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import AppBar from "@mui/material/AppBar";
import { colors } from "../../utils/colors";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  AccountCircle,
  SettingsOutlinedIcon,
  NotificationsOutlinedIcon,
  ArrowDropDownOutlinedIcon,
} from "../../utils/icons";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  /** user menu */
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ mt: 5 }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

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
              onClick={handleProfileMenuOpen}
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

      {renderMenu}
    </Box>
  );
};

export default Header;
