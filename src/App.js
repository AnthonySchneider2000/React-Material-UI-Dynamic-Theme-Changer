//TODOS: Change Font, move sidebar to own component, add bevel to sidebar
import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/Inbox";
import SearchIcon from "@mui/icons-material/Search";
import { ColorLens } from "@mui/icons-material";
import { Brightness2, Brightness7 } from "@mui/icons-material";
import { Toaster, toast } from "react-hot-toast";
import StyledAvatar from "./components/StyledAvatar.js";
import tinycolor from "tinycolor2";
import styles from "./styles/app.module.css";

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

const App = () => {
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
    toast.success(message, {
      style: {
        background: currentTheme.palette.primary.main,
        color: currentTheme.palette.primary.contrastText,
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
          <Switch color="secondary" />
        </div>

        {/* avatar */}
        <div className={styles.avatar}>
          <StyledAvatar>TS</StyledAvatar>
        </div>

        {/* drawer */}
        <div>
          <Drawer className="drawerContainer" variant="permanent">
            <List>
              <ListItem button onClick={handleNewMessages}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="New Messages" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItem>
              <ListItem button onClick={handleDarkModeToggle}>
                <ListItemIcon>
                  {darkMode ? <Brightness7 /> : <Brightness2 />}{" "}
                  {/* Use the respective icon based on the mode */}
                </ListItemIcon>
                <ListItemText primary={darkMode ? "Light Mode" : "Dark Mode"} />{" "}
                {/* Change the text based on the mode */}
              </ListItem>
              <ListItem button onClick={handleThemeChange}>
                <ListItemIcon>
                  <ColorLens />
                </ListItemIcon>
                <ListItemText primary="Custom Theme" />
                <input
                  style={{ backgroundColor: "transparent", border: "none" }}
                  type="color"
                  value={colorPickerColor}
                  onChange={handleColorChange}
                />
              </ListItem>
            </List>
          </Drawer>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
