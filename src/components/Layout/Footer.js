import React from "react";
import { Paper, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
const Footer = () => {
  const currentTheme = useTheme();
  return (
    <Paper
      elevation={3}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "10px",
        textAlign: "center",
        backgroundColor: currentTheme.palette.primary.main,
        color: currentTheme.palette.primary.contrastText,
        zIndex: 2000,
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} AGSoftware. All rights reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
