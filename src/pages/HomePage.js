//TODOS: further consolidate sidebar, add bevel to sidebar, fix color selector changing theme, add profile page
import React, { useState } from "react";
import {
  CssBaseline,
  Button,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import styles from "../styles/app.module.css";
import MuteSwitch from "../components/MuteSwitch.js";
import StyledAvatar from "../components/StyledAvatar.js";
import Sidebar from "../components/Sidebar";
import { handleThemeChange } from "../utils/themeUtils";

const initialTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Initial primary color
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});


const HomePage = () => {
  const [currentTheme, setCurrentTheme] = useState(initialTheme); // Define the state variable for the current theme
  const [darkMode, setDarkMode] = useState(false); // Track dark mode state, false = light mode, true = dark mode
  const [userInputColor, setUserInputColor] = useState("#1976d2"); // Default initial color
  const [colorPickerColor, setColorPickerColor] = useState("#1976d2"); // Default initial color

 
  const handleColorChange = (event) => {
    setColorPickerColor(event.target.value);
    setUserInputColor(event.target.value);
  };

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle the dark mode state
    if (darkMode) {
      setCurrentTheme(lightTheme);
    } else {
      setCurrentTheme(darkTheme);
    }
  };
  const createToast = (message) => {
    let toastBackground = currentTheme.palette.primary.main;
    let toastColor = currentTheme.palette.primary.contrastText;
    toast.success(message, {
      style: {
        background: toastBackground,
        color: toastColor,
      },
    });
  };
  const handleNewMessages = () => {
    createToast("You have 3 new messages");
  };

  const onThemeChange = () => {
    //possibly darken color picker color
    const updatedTheme = handleThemeChange(userInputColor);
    setCurrentTheme(updatedTheme);
  };

  return (
    <>
      <Toaster />

      <ThemeProvider theme={currentTheme}>
        <CssBaseline />

        <div className={styles.heading}>
          <Typography variant="h1" component="h1" gutterBottom>
            Home Page
          </Typography>
        </div>

        {/* content */}
        <div className={styles.centeredContent}>
          <Button variant="contained">Pretty Colors</Button>
        </div>
        {/* mute switch */}
        <div className={styles.muteSwitch}>
          <MuteSwitch />
        </div>
        {/* avatar */}
        <Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}>
        <div className={styles.avatar}>
          <StyledAvatar>TS</StyledAvatar>
        </div>
        </Link>

        {/* drawer */}
        <div>
          <Sidebar handleThemeChange={onThemeChange} darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} handleNewMessages={handleNewMessages} colorPickerColor={colorPickerColor} handleColorChange={handleColorChange}/>
        </div>
      </ThemeProvider>
    </>
  );
};

export default HomePage;
