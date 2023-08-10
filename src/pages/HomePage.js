//TODOS: ANIMATIONS, fill whitespace, signup page, add bevel to sidebar, fix color selector changing theme
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
  const { currentTheme } = useThemeContext();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

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

          {/* footer */}
          <Footer currentTheme={currentTheme} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
