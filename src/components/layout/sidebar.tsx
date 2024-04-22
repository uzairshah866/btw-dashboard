import * as React from "react";
import logo from "../../assets/logo.png";
import { Typography } from "@mui/material";
import { colors } from "../../utils/colors";
import styles from "../../global.module.scss";
import logoText from "../../assets/logoText.png";
import { SIDEBAR_ITEMS } from "../../utils/constants";
import { SidebarItemProps, SidebarProps } from "../../interfaces";
import {
  AccountCircleOutlinedIcon,
  ExpandMoreOutlinedIcon,
} from "../../utils/icons";

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  text,
  selected,
  onClick,
}) => {
  return (
    <Typography
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: selected ? colors.primary : colors.white,
        backgroundColor: selected ? colors.white : colors.transparent,
        py: 2,
        px: 2,
        fontSize: 14,
        cursor: "pointer",
        borderRadius: 2,
        width: "90%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Icon sx={{ mr: 1 }} />
        <div> {text}</div>
      </div>
      <ExpandMoreOutlinedIcon />
    </Typography>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  selectedItem,
  onSidebarItemClick,
}) => {
  return (
    <div className={styles.sidebar}>
      <img alt="logo" src={logo} style={{ margin: "20px 0 10px 0" }} />
      <img alt="logo" src={logoText} style={{ margin: "0 0 20px 0" }} />

      <div>
        {/* dashboard link */}
        <div>
          {SIDEBAR_ITEMS.slice(0, 1).map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              text={item.text}
              selected={selectedItem === item.text}
              onClick={() => {
                onSidebarItemClick(item.text);
              }}
            />
          ))}
        </div>
        {/* Pages link */}
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: colors.white,
            margin: "20px 0 10px 0",
            paddingBottom: 20,
            borderBottom: `1px solid ${colors.white}`,
          }}
        >
          PAGES
        </div>
        {SIDEBAR_ITEMS.slice(1).map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            selected={selectedItem === item.text}
            onClick={() => onSidebarItemClick(item.text)}
          />
        ))}
      </div>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: colors.white,
          borderTop: `1px solid ${colors.white}`,
          borderBottom: `1px solid ${colors.white}`,
          py: 2,
          width: "90%",
          mt: 20,
        }}
      >
        <AccountCircleOutlinedIcon sx={{ mr: 1 }} /> Profile Management
      </Typography>
    </div>
  );
};

export default Sidebar;
