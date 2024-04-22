import * as React from "react";
import { colors } from "../../utils/colors";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { AccordianData } from "../../interfaces/shared";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

export default function CustomAccordions({
  name,
  count,
  probability,
}: AccordianData) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          my: 2,
          border: `1px solid ${colors.primary}`,
          boxShadow: 0,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              color: "#282B33",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            {name}{" "}
            <span
              style={{
                backgroundColor: colors.primary,
                padding: "4px 8px",
                borderRadius: 20,
                color: colors.white,
                fontSize: 12,
              }}
            >
              {count}
            </span>
          </Typography>
          <Typography
            sx={{
              color: colors.primary,
              fontSize: 12,
              fontWeight: 400,
              lineHeight: "24px" /* 200% */,
              letterSpacing: "0.1px",
            }}
          >
            {probability}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
