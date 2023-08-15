import React, { useState } from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import ImageLightbox from './ImageLightbox';

const ImageWrapper = styled('img')({
  maxWidth: '200px',
  maxHeight: '200px',
  transition: 'transform 0.3s ease-in-out', // Add a transition for smooth scaling
  '&:hover': {
    transform: 'scale(1.1)', // Scale up the image on hover
  },
  display: 'flex', // Set the display value to flex to align the items inside the flex container
  alignItems: 'space-evenly', // Align the images to the space-evenly of the container
  alignSelf: 'space-evenly', // Align the images to the space-evenly of the container
  cursor: 'pointer', // Add a cursor pointer to indicate clickable image
});

const UploadedImages = ({ uploadedFiles }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
    setLightboxOpen(false);
  };

 return (
    <Box mt={2}>
      <Typography variant="h6">Uploaded Images:</Typography>
      <List style={{ width: '100%', alignItems: "space-evenly" }}>
        <ListItem style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-evenly", alignItems: "space-evenly"}}>
          {uploadedFiles.map((file, index) => (
            <Box key={index} p={1} style={{ flex: `0 0 0`, alignItems:"space-evenly" }}>
              <ImageWrapper
                src={URL.createObjectURL(file)}
                alt={file.name}
                onClick={() => handleImageClick(URL.createObjectURL(file))}
              />
            </Box>
          ))}
        </ListItem>
      </List>
      {lightboxOpen && (
        <ImageLightbox open={lightboxOpen} onClose={handleCloseLightbox} imageSrc={selectedImage} />
      )}
    </Box>
  );
};

export default UploadedImages;
