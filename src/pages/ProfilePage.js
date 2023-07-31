//TODOS: further consolidate sidebar, add bevel to sidebar, fix color selector changing theme, add profile page
import React, { useState } from "react";
import {
  CssBaseline,
  Button,
  Typography,
  Container,
  Box,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { ThemeProvider } from "@mui/material/styles";
import { Toaster, toast } from "react-hot-toast";
import styles from "../styles/app.module.css";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import MuteSwitch from "../components/MuteSwitch.js";
import StyledAvatar from "../components/StyledAvatar.js";
import Sidebar from "../components/Sidebar";
import CustomDropzone from "../components/CustomDropzone";
import UploadedImages from "../components/UploadedImages";
import {
  initialTheme,
  handleThemeChange,
  toggleDarkMode,
} from "../utils/themeUtils";

const HomePage = () => {
  const [currentTheme, setCurrentTheme] = useState(initialTheme); // Define the state variable for the current theme
  const [darkMode, setDarkMode] = useState(false); // Track dark mode state, false = light mode, true = dark mode
  const [userInputColor, setUserInputColor] = useState("#1976d2"); // Default initial color
  const [colorPickerColor, setColorPickerColor] = useState("#1976d2"); // Default initial color
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (files) => {
    setUploadedFiles(files);
  };

  const handleColorChange = (event) => {
    setColorPickerColor(event.target.value);
    setUserInputColor(event.target.value);
  };

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle the dark mode state
    toggleDarkMode(darkMode, setCurrentTheme);
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
    const updatedTheme = handleThemeChange(userInputColor);
    setCurrentTheme(updatedTheme);
  };
  return (
    <>
      <Toaster />

      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {/* heading */}
        <div className={styles.heading}>
          <Typography variant="h1" component="h1" gutterBottom>
            Profile
          </Typography>
        </div>

        {/* content */}
        <Container style={{ textAlign: "center" }}>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            mt={2}
          >
            <Link to="/" state={{}}>
              <Button variant="contained" startIcon={<HomeIcon />}>
                Home Page
              </Button>
            </Link>
            <CustomDropzone onDrop={handleDrop} />
            <Box mt={2}>
              {uploadedFiles.length > 0 && (
                <Paper
                  elevation={3}
                  style={{ maxHeight: "600px", overflowY: "auto" }}
                >
                  <UploadedImages uploadedFiles={uploadedFiles} />
                </Paper>
              )}
            </Box>
          </Box>
        </Container>

        {/* mute switch */}
        <div className={styles.muteSwitch}>
          <MuteSwitch />
        </div>

        {/* avatar */}
        <div className={styles.avatar}>
          <StyledAvatar>TS</StyledAvatar>
        </div>

        {/* drawer */}
        <div>
          <Sidebar
            handleThemeChange={onThemeChange}
            darkMode={darkMode}
            handleDarkModeToggle={handleDarkModeToggle}
            handleNewMessages={handleNewMessages}
            colorPickerColor={colorPickerColor}
            handleColorChange={handleColorChange}
            currentTheme={currentTheme}
          />
        </div>
      </ThemeProvider>
    </>
  );
};

export default HomePage;
