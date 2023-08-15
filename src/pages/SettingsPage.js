import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Paper,
  Slider,
  Typography,
} from "@mui/material";
import BrightnessIcon from "@mui/icons-material/BrightnessMedium";
import SettingsColumnBox from "../components/SettingsComponents/SettingsColumnBox";
import SettingsItemBox from "../components/SettingsComponents/SettingsItemBox";

const VolumeSettings = () => {
  return (
    <SettingsItemBox>
      <Typography align="center" id="volume-slider" gutterBottom>
        Volume
      </Typography>
      <Slider aria-labelledby="volume-slider" />
    </SettingsItemBox>
  );
};

const BrightnessSettings = () => {
  return (
    <SettingsItemBox>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* brightness icon */}
        <BrightnessIcon />
        {/* brightness typography */}
        <Typography
          sx={{ marginRight: "12px" }}
          id="brightness-slider"
          gutterBottom
        >
          Brightness
        </Typography>
      </Box>
      {/* brightness slider */}
      <Slider aria-labelledby="brightness-slider" />
    </SettingsItemBox>
  );
};

const DarkModeSettings = () => {
  return (
    <SettingsItemBox>
      <FormControlLabel control={<Checkbox />} label="Dark Mode" />
    </SettingsItemBox>
  );
};

const LanguageSettings = () => {
  return (
    <SettingsItemBox>
      <Typography align="center">Select Language</Typography>
      <Select value="en" size="small">
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Spanish</MenuItem>
        <MenuItem value="fr">French</MenuItem>
        <MenuItem value="de">German</MenuItem>
      </Select>
    </SettingsItemBox>
  );
};

const TimeZoneSettings = () => {
  return (
      <SettingsItemBox>
        <Typography align="center">Select Time Zone</Typography>
        <Select value="GMT" size="small">
          <MenuItem value="GMT">GMT</MenuItem>
          <MenuItem value="EST">EST</MenuItem>
          <MenuItem value="CST">CST</MenuItem>
          <MenuItem value="MST">MST</MenuItem>
        </Select>
      </SettingsItemBox>
  );
};

const EmailSettings = () => {
  return (
    <SettingsItemBox>
      <FormControlLabel
        control={<Checkbox />}
        label="Receive Email Notifications"
      />
    </SettingsItemBox>
  );
};

const SMSSettings = () => {
  return (
    <SettingsItemBox>
      <FormControlLabel
        control={<Checkbox />}
        label="Receive SMS Notifications"
      />
    </SettingsItemBox>
  );
};

const PushSettings = () => {
  return (
    <SettingsItemBox>
      <FormControlLabel
        control={<Checkbox />}
        label="Receive Push Notifications"
      />
    </SettingsItemBox>
  );
};


const Settings = () => {
  return (
    <Layout title="Settings" toolbarHeight={100}>
      {/* outer row box, contains both settings columns */}
      <Paper
        elevation={1}
        sx={{
          paddingTop: "5%",
          paddingBottom: "5%",
          height: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "95%",
          margin: "auto",
        }}
      >
        {/* inner column boxes, contain settings items */}
        <SettingsColumnBox>
          <BrightnessSettings />
          <VolumeSettings />
          <SMSSettings />
          <PushSettings />
        </SettingsColumnBox>

        <SettingsColumnBox>
          <LanguageSettings />
          <TimeZoneSettings />
          <EmailSettings />
          <DarkModeSettings />
        </SettingsColumnBox>
      </Paper>
    </Layout>
  );
};

export default Settings;
