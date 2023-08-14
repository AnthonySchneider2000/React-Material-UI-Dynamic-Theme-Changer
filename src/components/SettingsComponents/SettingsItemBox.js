import React from "react";
import { Box } from "@mui/material";

const SettingsItemBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        border: "1px solid black",
        height: "20%",
        maxHeight: "100px",
      }}
    >
      {children}
    </Box>
  );
};

export default SettingsItemBox;
