import * as React from "react";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/Inbox";
import SearchIcon from "@mui/icons-material/Search";
import { ColorLens } from "@mui/icons-material";
import { Brightness2, Brightness7 } from "@mui/icons-material";
import { ListItem, TextField } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const mainListItems = ({
  handleNewMessages,
  onThemeChange,
  isDarkMode,
  toggleDarkMode,
  colorPickerColor,
  handleColorChange,
}) => (
  <React.Fragment>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/profile">
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button onClick={handleNewMessages}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="New Messages" />
    </ListItem>
    <ListItem button sx={{ maxHeight: "50px" }}>
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <TextField
        variant="standard"
        label="Search"
        size="small"
        sx={{ marginBottom: "7px" }}
      />
    </ListItem>
    <ListItem button onClick={toggleDarkMode}>
      <ListItemIcon>
        {isDarkMode ? <Brightness7 /> : <Brightness2 />}
      </ListItemIcon>
      <ListItemText primary={isDarkMode ? "Light Mode" : "Dark Mode"} />
    </ListItem>
    <ListItem button onClick={onThemeChange}>
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
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);

export const thirdListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);
