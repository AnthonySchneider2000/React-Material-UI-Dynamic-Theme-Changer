import React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import { toast } from "react-hot-toast";
import styles from "../styles/app.module.css";
import { DatePicker } from "@mui/x-date-pickers";
import { MuiChipsInput } from "mui-chips-input";
import MuiPhoneNumber from "material-ui-phone-number";
import Layout from "../components/Layout/Layout";
import { useTheme } from "@mui/material/styles";

const EditProfilePage = () => {
  const currentTheme = useTheme();
  const [chips, setChips] = React.useState([]);

  const handleChipsChange = (chips) => {
    setChips(chips);
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
    <Layout title="Edit Profile" toolbarHeight={100}>
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
            <DatePicker label="Date of Birth" className={styles.inputField} />
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
            {/* favorite tags */}
            <MuiChipsInput
              label="Favorite Tags"
              className={styles.inputField}
              value={chips}
              onChange={handleChipsChange}
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
    </Layout>
  );
};

export default EditProfilePage;
