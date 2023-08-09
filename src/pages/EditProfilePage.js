import React from "react";
import { CssBaseline, Typography, Button, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import styles from "../styles/app.module.css";
import MuteSwitch from "../components/MuteSwitch.js";
import StyledAvatar from "../components/StyledAvatar.js";
import Footer from "../components/Footer";
import { useThemeContext } from "../utils/ThemeContext";
import { DatePicker } from "@mui/x-date-pickers";
import MuiPhoneNumber from "material-ui-phone-number";
import AppBarComponent from "../components/AppBarComponent";
import CollapseableSidebar from "../components/CollapseableSidebar";

const EditProfilePage = () => {
  const {
    currentTheme
  } = useThemeContext();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
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
  const handleSaveSettings = () => {
    createToast("Settings Saved");
  };


  return (
    <>

      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {/* drawer */}
        <AppBarComponent open={open} toggleDrawer={toggleDrawer} title="Edit Profile" />
        <CollapseableSidebar open={open} toggleDrawer={toggleDrawer} />

        {/* header */}
        <div className={styles.heading}>
          <Typography variant="h1" component="h1" gutterBottom>
            Edit Profile
          </Typography>
        </div>

        {/* edit user info */}
        <div className={styles.centeredContent}>
          {/* first name entry */}
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            className={styles.inputField}
          />
          {/* last name entry */}
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            className={styles.inputField}
          />
          {/* date of birth entry */}
          <DatePicker label="Date of Birth" className={styles.inputField} />
          {/* phone number entry */}
          <MuiPhoneNumber
            variant="outlined"
            label="Phone Number"
            defaultCountry={"us"}
            className={styles.inputField}
          />

        </div>
          <div className={styles.saveButtonContainer}>
          {/* save button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveSettings}
            className={styles.saveButton}
          >
            Save
          </Button>

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

export default EditProfilePage;
