//TODOS: Change Font, Make color picker look better, move sidebar to own component, add bevel to sidebar
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
import tinycolor from "tinycolor2";

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

  const handleThemeChange = () => {
    const secondaryColor = darkenColor(userInputColor, 6);
    const backgroundColorDefault = lightenColor(userInputColor, 6);
    const backgroundColorPaper = lightenColor(userInputColor, 4);

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
      },
      // Additional theme customizations...
    });

    setCurrentTheme(updatedTheme);
  };

  const handleColorChange = (event) => {
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button variant="contained">
            Pretty Colors
          </Button>
          <Switch color="secondary" />
        </div>

        <div style={{ display: "flex" }}>
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
              <ListItem button>
                <ListItemIcon>
                  <ColorLens />
                </ListItemIcon>
                <Button onClick={handleThemeChange} variant="contained">
                  Change Theme
                </Button>
                <input
                  type="color"
                  value={userInputColor}
                  onChange={handleColorChange}
                />
              </ListItem>
              <ListItem button onClick={handleDarkModeToggle}>
                <ListItemIcon>
                  {darkMode ? <Brightness7 /> : <Brightness2 />}{" "}
                  {/* Use the respective icon based on the mode */}
                </ListItemIcon>
                <ListItemText primary={darkMode ? "Light Mode" : "Dark Mode"} />{" "}
                {/* Change the text based on the mode */}
              </ListItem>
            </List>
          </Drawer>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
