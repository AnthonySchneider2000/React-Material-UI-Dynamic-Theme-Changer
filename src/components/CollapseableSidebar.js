import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { mainListItems, adminListItems } from '../components/listItems';
import { useThemeContext } from "../utils/ThemeContext";
import toast from "react-hot-toast";
import { drawerWidth } from '../utils/constants';

const DrawerContainer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const CollapseableSidebar = ({ open, toggleDrawer }) => {
  const {
    currentTheme,
    handleThemeChange,
    isDarkMode,
    toggleDarkMode,
    colorPickerColor,
    userInputColor,
    handleColorChange,
  } = useThemeContext();
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
  const handleNewMessages = () => {
    createToast("You have 3 new messages");
  };

  const onThemeChange = () => {
    //possibly darken color picker color
    handleThemeChange(userInputColor);
  };
  return (
    <DrawerContainer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
      {mainListItems({
        handleNewMessages,
        onThemeChange,
        isDarkMode,
        toggleDarkMode,
        colorPickerColor,
        handleColorChange,
      })}
        <Divider sx={{ my: 1 }} />
        {adminListItems}
      </List>
    </DrawerContainer>
  );
};

export default CollapseableSidebar;
