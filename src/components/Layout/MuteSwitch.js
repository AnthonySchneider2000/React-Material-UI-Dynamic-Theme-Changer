//sound muted and unmuted icons
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import React from "react";
import Switch from "@mui/material/Switch";
import styles from "./MuteSwitch.module.css";
import { useThemeContext } from "../../utils/ThemeContext";

const MuteSwitch = () => {
  const { muted, setMuted } = useThemeContext();

  const handleMutedToggle = () => {
    setMuted((prevMuted) => !prevMuted); // Toggle the muted state
  };

  return (
    <div className={styles.muteSwitchContainer}>
      {muted ? <VolumeUpIcon style={{ marginRight: "-10px" }} /> : <VolumeOffIcon style={{ marginRight: "-10px" }} />}
      <Switch color="secondary" checked={muted} onChange={handleMutedToggle} />
    </div>
  );
};

export default MuteSwitch;
