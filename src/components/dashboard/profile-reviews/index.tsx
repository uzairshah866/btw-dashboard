import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import GMB1 from "./profiles/gmb-1";
import GMB2 from "./profiles/gmb-2";
import GMB3 from "./profiles/gmb-3";
import GMB5 from "./profiles/gmb-5";
import GMB4 from "./profiles/gmb-4";
import GMB6 from "./profiles/gmb-6";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { PROFILE_TABS } from "../../../utils/constants";
import { TabPanelProps } from "../../../interfaces/dashboard";

const COMPONENTS = [<GMB1 />, <GMB2 />, <GMB3 />, <GMB4 />, <GMB5 />, <GMB6 />];

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const createTab = (label: string, index: number) => ({
    label,
    ...a11yProps(index),
    sx: {
      backgroundColor: value === index ? "#E5F6FF" : "inherit",
      color: value === index ? "#125D87" : "#525866",
      textTransform: "capitalize",
      padding: "0 30px",
    },
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {PROFILE_TABS.map((label, index) => (
            <Tab key={index} {...createTab(label, index)} />
          ))}
        </Tabs>
      </Box>
      {COMPONENTS.map((component, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {component}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
