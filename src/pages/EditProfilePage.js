import React from "react";
import {
  CssBaseline,
  Button,
  TextField,
  Box,
  Toolbar,
  Paper,
  Grid,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { toast } from "react-hot-toast";
import styles from "../styles/app.module.css";
import Footer from "../components/Footer";
import { useThemeContext } from "../utils/ThemeContext";
import { DatePicker } from "@mui/x-date-pickers";
import MuiPhoneNumber from "material-ui-phone-number";
import AppBarComponent from "../components/AppBarComponent";
import CollapseableSidebar from "../components/CollapseableSidebar";

const EditProfilePage = () => {
  const { currentTheme, open, toggleDrawer } = useThemeContext();

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
  const handleSaveSettings = () => {
    createToast("Settings Saved");
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        {/* drawer */}
        <AppBarComponent
          open={open}
          toggleDrawer={toggleDrawer}
          title="Edit Profile"
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
          {/* edit user info */}
          <Paper elevation={10} sx={{ width: "90%", margin: "0 auto 20px" }}>
            <Grid
              container
              spacing={3}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={8} lg={9}>
                {/* first name entry */}
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  className={styles.inputField}
                />
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                {/* last name entry */}
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  className={styles.inputField}
                />
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                {/* date of birth entry */}
                <DatePicker
                  label="Date of Birth"
                  className={styles.inputField}
                />
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                {/* phone number entry */}
                <MuiPhoneNumber
                  variant="outlined"
                  label="Phone Number"
                  defaultCountry={"us"}
                  className={styles.inputField}
                />
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                {/* save button */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveSettings}
                  sx={{ margin: "0 auto 20px" }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        {/* footer */}
        <Footer currentTheme={currentTheme} />
      </Box>
    </ThemeProvider>
  );
};

export default EditProfilePage;
