import React from "react";
import { Box } from "@mui/material";
import { hasBorder } from "../../utils/constants"; //add a border around the component for debuggin purposes

const SettingsColumnBox = ({ children }) => {
    const maxSpacing = 100;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        border: hasBorder ? "1px solid black" : "none", // Conditional border
        width: "20%",
        gap: `min(7%, ${maxSpacing}px)`, // This calculates the gap based on 10% or 50px, whichever is smaller.
      }}
    >
      {children}
    </Box>
  );
};

export default SettingsColumnBox;
