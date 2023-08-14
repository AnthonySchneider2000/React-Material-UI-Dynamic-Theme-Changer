import React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Slider,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import BrightnessIcon from "@mui/icons-material/BrightnessMedium";
import PaletteIcon from "@mui/icons-material/Palette";
import VolumeIcon from "@mui/icons-material/VolumeUp";
import SettingsColumnBox from "../components/SettingsComponents/SettingsColumnBox";
import SettingsItemBox from "../components/SettingsComponents/SettingsItemBox";

const Settings = () => {
  return (
    <Layout title="Settings" toolbarHeight={100}>
      {/* outer row box, contains both settings columns */}
      <Box
        sx={{
          height: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {/* inner column boxes, contain settings items */}
        <SettingsColumnBox>
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
              <Typography sx={{marginRight: "12px"}} align="center" id="brightness-slider" gutterBottom>
                Brightness
              </Typography>
            </Box>
            {/* brightness slider */}
            <Slider aria-labelledby="brightness-slider" />
          </SettingsItemBox>

          <SettingsItemBox>
            <FormControlLabel control={<Checkbox />} label="Dark Mode" />
          </SettingsItemBox>

          <SettingsItemBox>
            <Typography align="center" id="volume-slider" gutterBottom>
              Volume
            </Typography>
            <Slider aria-labelledby="volume-slider" />
          </SettingsItemBox>
        </SettingsColumnBox>

        {/* inner column 2 */}
        <SettingsColumnBox>
          <SettingsItemBox>
            <Button variant="contained" startIcon={<PaletteIcon />}>
              Color Theme
            </Button>
          </SettingsItemBox>

          <SettingsItemBox>
            <Button variant="contained" startIcon={<VolumeIcon />}>
              Sound
            </Button>
            <Slider aria-labelledby="volume-slider" />
          </SettingsItemBox>

          <SettingsItemBox>
            <Typography>Select Language</Typography>
            <Select value="en" size="small">
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              {/* Add more languages */}
              <MenuItem value="fr">French</MenuItem>
              <MenuItem value="de">German</MenuItem>
            </Select>
          </SettingsItemBox>
        </SettingsColumnBox>
      </Box>
    </Layout>
  );
};

export default Settings;
