import React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Slider,
  Typography,
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
          height: "50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        
        {/* inner column boxes, contain settings items */}
        <SettingsColumnBox>
          <Button variant="contained" startIcon={<BrightnessIcon />}>
            Brightness
          </Button>
          <FormControlLabel control={<Checkbox />} label="Dark Mode" />
          <Typography id="volume-slider" gutterBottom>
            Volume
          </Typography>
          <Slider aria-labelledby="volume-slider" />
        </SettingsColumnBox>

        {/* inner column 2 */}
        <SettingsColumnBox>
          <Button variant="contained" startIcon={<PaletteIcon />}>
            Color Theme
          </Button>
          <FormControlLabel control={<Checkbox />} label="Custom Colors" />
          {/* settings item box */}
          <SettingsItemBox>
            <Button variant="contained" startIcon={<VolumeIcon />}>
              Sound
            </Button>
            <Slider aria-labelledby="volume-slider" />
          </SettingsItemBox>
        </SettingsColumnBox>
      </Box>
    </Layout>
  );
};

export default Settings;
