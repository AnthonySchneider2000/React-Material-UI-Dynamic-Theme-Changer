//sound muted and unmuted icons
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import React, {useState} from "react";
import Switch from "@mui/material/Switch";

const MuteSwitch = () => {
    const [muted, setMuted] = useState(true); // Track muted state, false = unmuted, true = muted

    const handleMutedToggle = () => {
      setMuted((prevMuted) => !prevMuted); // Toggle the muted state
    };
  
  return (
    <>
      {muted ? <VolumeUpIcon /> : <VolumeOffIcon />}
      <Switch color="secondary" checked={muted} onChange={handleMutedToggle} />
    </>
  );
};

export default MuteSwitch;
