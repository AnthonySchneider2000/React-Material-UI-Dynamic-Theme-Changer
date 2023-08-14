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
          <SettingsItemBox>
            <Button variant="contained" startIcon={<BrightnessIcon />}>
              Brightness
            </Button>
          </SettingsItemBox>
          <SettingsItemBox>
            <FormControlLabel control={<Checkbox />} label="Dark Mode" />
          </SettingsItemBox>
          <SettingsItemBox>
            <Typography id="volume-slider" gutterBottom>
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
