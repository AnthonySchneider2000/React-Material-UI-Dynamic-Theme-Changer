import React from 'react';
import { Box, Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageLightbox = ({ open, onClose, imageSrc }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box position="relative">
        <img src={imageSrc} alt="Enlarged" style={{ maxWidth: '100%', maxHeight: '90vh' }} />
        <IconButton
          aria-label="close"
          size="large"
          style={{ position: 'absolute', top: 10, right: 10, color: 'white' }}
          onClick={onClose}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>
    </Dialog>
  );
};

export default ImageLightbox;
