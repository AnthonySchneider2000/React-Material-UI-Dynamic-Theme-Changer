// StyledAvatar.js
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

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

export default StyledAvatar;
