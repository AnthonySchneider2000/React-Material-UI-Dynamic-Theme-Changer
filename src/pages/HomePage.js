//TODOS: ANIMATIONS, move dashboard to secondary sidebar, possibly make admin only, make layout component, signup page, add bevel to sidebar, footer length, fix color selector changing theme
import React from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import styles from "../styles/app.module.css";
import TrailsCarousel from "../components/TrailsCarousel";
import Footer from "../components/Footer";
import { useThemeContext } from "../utils/ThemeContext";
import AppBarComponent from "../components/AppBarComponent";
import CollapseableSidebar from "../components/CollapseableSidebar";

const HomePage = () => {
  const { currentTheme, open, toggleDrawer } = useThemeContext();


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBarComponent
          open={open}
          toggleDrawer={toggleDrawer}
          title="Home Page"
        />
        <CollapseableSidebar open={open} toggleDrawer={toggleDrawer} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          {/* Toolbar adds some padding, I dont think it's useful for anything else
          because the actual toolbar is displayed from AppBarComponent*/}
          <Toolbar sx={{ height: 100 }} />

          {/* testimonials */}
          <div className={styles.carouselContainer}>
            <TrailsCarousel />
          </div>
        </Box>
        {/* footer */}
        <Footer currentTheme={currentTheme} />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
