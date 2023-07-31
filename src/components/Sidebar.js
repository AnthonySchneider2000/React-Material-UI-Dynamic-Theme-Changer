import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import SearchIcon from "@mui/icons-material/Search";
import { ColorLens } from "@mui/icons-material";
import { Brightness2, Brightness7 } from "@mui/icons-material";

const Sidebar = ({
  handleThemeChange,
  handleDarkModeToggle,
  isDarkMode,
  handleNewMessages,
  colorPickerColor,
  handleColorChange,
  currentTheme,
}) => {
  return (
    <Drawer className="drawerContainer" variant="permanent">
      <List>
        <ListItem button onClick={handleNewMessages}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="New Messages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button onClick={handleDarkModeToggle}>
        <ListItemIcon>
          {/* {currentTheme.palette.mode === "light" ? <Brightness2 /> : <Brightness7 />} */}
          
          {/* Use the respective icon based on the theme type */}
          {isDarkMode ? <Brightness7 /> : <Brightness2 />}
        </ListItemIcon>
        {/* <ListItemText primary={currentTheme.palette.mode === "light" ? "Dark Mode" : "Light Mode"} /> */}
        <ListItemText primary={isDarkMode ? "Light Mode" : "Dark Mode"} />
      </ListItem>
        <ListItem button onClick={handleThemeChange}>
          <ListItemIcon>
            <ColorLens />
          </ListItemIcon>
          <ListItemText primary="Custom Theme" />
          <input
            style={{ backgroundColor: "transparent", border: "none" }}
            type="color"
            value={colorPickerColor}
            onChange={handleColorChange}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
