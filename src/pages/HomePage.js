//TODOS: further consolidate sidebar, add bevel to sidebar, fix color selector changing theme, add profile page
import React, { useState } from "react";
import {
  CssBaseline,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Toaster, toast } from "react-hot-toast";
import tinycolor from "tinycolor2";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import styles from "../styles/app.module.css";
import MuteSwitch from "../components/MuteSwitch.js";
import StyledAvatar from "../components/StyledAvatar.js";
import Sidebar from "../components/Sidebar";

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

function lightenColor(primaryColor, amount) {
  const baseColor = tinycolor(primaryColor);
  const lightenedColor = baseColor.lighten(amount).toHexString();
  return lightenedColor;
}
function darkenColor(primaryColor, amount) {
  const baseColor = tinycolor(primaryColor);
  const darkenedColor = baseColor.darken(amount).toHexString();
  return darkenedColor;
}

const HomePage = () => {
  const [currentTheme, setCurrentTheme] = useState(initialTheme); // Define the state variable for the current theme
  const [darkMode, setDarkMode] = useState(false); // Track dark mode state, false = light mode, true = dark mode
  const [userInputColor, setUserInputColor] = useState("#1976d2"); // Default initial color
  const [colorPickerColor, setColorPickerColor] = useState("#1976d2"); // Default initial color

  const handleThemeChange = () => {
    const secondaryColor = darkenColor(userInputColor, 16);
    const backgroundColorDefault = lightenColor(userInputColor, 6);
    const backgroundColorPaper = lightenColor(userInputColor, 4);
    const themeMode = colorIsDark(userInputColor) ? "dark" : "light";

    const updatedTheme = createTheme({
      palette: {
        primary: {
          main: userInputColor,
        },
        secondary: {
          main: secondaryColor,
        },
        background: {
          default: backgroundColorDefault,
          paper: backgroundColorPaper,
        },
        mode: themeMode,
      },
      // Additional theme customizations...
    });

    setCurrentTheme(updatedTheme); // Update the current theme
    setColorPickerColor(darkenColor(userInputColor,6)); // Update the color picker color to contrast with the new primary color
  };

  const colorIsDark = (hexColor) => {
    const threshold = 76; // this is the closest match I could find for the default material UI value
    const baseColor = tinycolor(hexColor);
    const luminance = baseColor.getLuminance() * 255;
    return luminance < threshold;
  };

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

  return (
    <>
      <Toaster />

      <ThemeProvider theme={currentTheme}>
        <CssBaseline />

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
          <Sidebar handleThemeChange={handleThemeChange} darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} handleNewMessages={handleNewMessages} colorPickerColor={colorPickerColor} handleColorChange={handleColorChange}/>
        </div>
      </ThemeProvider>
    </>
  );
};

export default HomePage;
