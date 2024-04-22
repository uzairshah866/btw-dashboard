import React from "react";
import { MUIButtonProps } from "../../interfaces";
import Button, { ButtonProps } from "@mui/material/Button";

const MUIButton: React.FC<MUIButtonProps & ButtonProps> = ({
  text,
  ...rest
}) => {
  return <Button {...rest}>{text}</Button>;
};

export default MUIButton;
