import React, { useState } from "react";
import {
  CssBaseline,
  Button,
  Typography,
  Container,
  Box,
  Paper,
} from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { ThemeProvider } from "@mui/material/styles";
import styles from "../styles/app.module.css";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import MuteSwitch from "../components/MuteSwitch.js";
import StyledAvatar from "../components/StyledAvatar.js";
import CustomDropzone from "../components/CustomDropzone";
import UploadedImages from "../components/UploadedImages";
import Footer from "../components/Footer";
import CollapseableSidebar from "../components/CollapseableSidebar";
import AppBarComponent from "../components/AppBarComponent";
import { useThemeContext } from "../utils/ThemeContext";

const HomePage = () => {
  const {
    currentTheme
  } = useThemeContext();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (files) => {
    setUploadedFiles(files);
  };

  
  return (
    <>

      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {/* drawer */}
        <AppBarComponent open={open} toggleDrawer={toggleDrawer} title="Profile"/>
        <CollapseableSidebar open={open} toggleDrawer={toggleDrawer} />
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
            {/* link to edit profile */}
            <Link to="/edit-profile" state={{}}>
              <Button
                variant="contained"
                style={{ margin: "10px" }}
                startIcon={<ManageAccountsIcon />}
              >
                Edit Profile
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

        {/* footer */}
        <Footer currentTheme={currentTheme} />
      </ThemeProvider>
    </>
  );
};

export default HomePage;
