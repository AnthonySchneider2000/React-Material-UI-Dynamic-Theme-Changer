// StyledAvatar.js
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { Menu } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  cursor: 'pointer',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  transition: theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
  border: `1px solid ${theme.palette.primary.dark}`,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    transform: 'scale(1.3)',
  },
}));

export const AvatarMenu = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <StyledAvatar
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {children}
      </StyledAvatar>
      <Menu
        id="menu-list-grow"
        anchorEl={anchorRef.current}
        open={open}
        onClose={handleClose}
        onKeyDown={handleListKeyDown}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuItem component={Link} to="/profile" divider={true}>Profile</MenuItem>
        <MenuItem divider={true}>Favorites</MenuItem>
        <MenuItem component={Link} to="/settings" divider={true}>Settings</MenuItem>
        <MenuItem component={Link} to="/login">Logout</MenuItem>
      </Menu>
    </>
  );
};

export default StyledAvatar;
