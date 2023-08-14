import React from "react";
import { Box } from "@mui/material";

const SettingsColumnBox = ({ children }) => {
    const maxSpacing = 100;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        border: "1px solid black",
        width: "20%",
        gap: `min(10%, ${maxSpacing}px)`, // This calculates the gap based on 10% or 50px, whichever is smaller.
      }}
    >
      {children}
    </Box>
  );
};

export default SettingsColumnBox;
