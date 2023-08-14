import React from "react";
import { Box } from "@mui/material";
import { hasBorder } from "../../utils/constants"; //add a border around the component for debuggin purposes

const SettingsItemBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        border: hasBorder ? "1px solid black" : "none", // Conditional border
        height: "20%",
        maxHeight: "100px",
      }}
    >
      {children}
    </Box>
  );
};

export default SettingsItemBox;
