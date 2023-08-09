//TODOS: ANIMATIONS, fill whitespace, signup page, add bevel to sidebar, fix color selector changing theme
import React from "react";
import { CssBaseline, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import styles from "../styles/app.module.css";
import MuteSwitch from "../components/MuteSwitch.js";
import StyledAvatar from "../components/StyledAvatar.js";
import TrailsCarousel from "../components/TrailsCarousel";
import Footer from "../components/Footer";
import { useThemeContext } from "../utils/ThemeContext";
import AppBarComponent from "../components/AppBarComponent";
import CollapseableSidebar from "../components/CollapseableSidebar";

const HomePage = () => {
  const {
    currentTheme
  } = useThemeContext();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        {/* drawer */}
        <AppBarComponent open={open} toggleDrawer={toggleDrawer} title="Home Page" />
        <CollapseableSidebar open={open} toggleDrawer={toggleDrawer} />
        <CssBaseline />

        <div className={styles.heading}>
          <Typography variant="h1" component="h1" gutterBottom>
            Home Page
          </Typography>
        </div>

        {/* testimonials */}
        <div className={styles.carouselContainer}>
          <TrailsCarousel />
        </div>
        {/* mute switch */}
        <div className={styles.muteSwitch}>
          <MuteSwitch />
        </div>
        {/* avatar */}
        <Link
          to="/profile"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className={styles.avatar}>
            <StyledAvatar>TS</StyledAvatar>
          </div>
        </Link>

        
        {/* footer */}
        <Footer currentTheme={currentTheme} />
      </ThemeProvider>
    </>
  );
};

export default HomePage;
