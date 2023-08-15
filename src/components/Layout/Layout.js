import React from "react";
import { Toolbar } from "@mui/material";
import AppBarComponent from "./AppBarComponent";
import CollapseableSidebar from "./Sidebar/CollapseableSidebar";
import Footer from "./Footer";
import PersistedThemeProvider from "./PersistedThemeProvider";
import { useThemeContext } from "../../utils/ThemeContext";
import Box from "@mui/material/Box";

const Layout = ({ children, title, toolbarHeight }) => {
  const { open, toggleDrawer } = useThemeContext();

  return (
    <PersistedThemeProvider>
      <Box sx={{ display: "flex" }}>
        <AppBarComponent open={open} toggleDrawer={toggleDrawer} title={title} />
        <CollapseableSidebar open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar sx={{ height: toolbarHeight }} />
          {children}
          <Footer />
        </Box>
      </Box>
    </PersistedThemeProvider>
);
};

export default Layout;
