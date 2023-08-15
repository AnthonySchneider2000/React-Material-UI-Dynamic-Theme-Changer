import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useThemeContext } from "../../utils/ThemeContext";

const PersistedThemeProvider = ({ children }) => {
  const { currentTheme } = useThemeContext();

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default PersistedThemeProvider;
