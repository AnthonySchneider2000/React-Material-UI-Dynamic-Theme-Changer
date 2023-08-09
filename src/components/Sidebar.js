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
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import HomeIcon from "@mui/icons-material/Home";


const Sidebar = ({
  handleThemeChange,
  handleDarkModeToggle,
  isDarkMode,
  handleNewMessages,
  colorPickerColor,
  handleColorChange,
}) => {
  return (
    <Drawer className="drawerContainer" variant="permanent">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
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
          {/* Use the respective icon based on the theme type */}
          {isDarkMode ? <Brightness7 /> : <Brightness2 />}
        </ListItemIcon>
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
