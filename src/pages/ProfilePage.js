import React, { useState } from "react";
import {
  CssBaseline,
  Button,
  Container,
  Box,
  Paper,
  Toolbar,
} from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import CustomDropzone from "../components/CustomDropzone";
import UploadedImages from "../components/UploadedImages";
import Footer from "../components/Footer";
import CollapseableSidebar from "../components/CollapseableSidebar";
import AppBarComponent from "../components/AppBarComponent";
import { useThemeContext } from "../utils/ThemeContext";

const HomePage = () => {
  const { currentTheme, open, toggleDrawer } = useThemeContext();

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (files) => {
    setUploadedFiles(files);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        {/* drawer */}
        <AppBarComponent
          open={open}
          toggleDrawer={toggleDrawer}
          title="Profile"
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
          {/* content */}
          <Container style={{ textAlign: "center" }}>
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              mt={2}
            >
              {/* Toolbar adds some padding, I dont think it's useful for anything else
              because the actual toolbar is displayed from AppBarComponent*/}
              <Toolbar sx={{ height: 100 }} />
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
        </Box>
        {/* footer */}
        <Footer currentTheme={currentTheme} />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
