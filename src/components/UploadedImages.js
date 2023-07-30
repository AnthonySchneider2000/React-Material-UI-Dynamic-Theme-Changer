import React, { useState } from 'react';
import { Box, Typography, List, ListItem, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import ImageLightbox from './ImageLightbox';

const IMAGES_PER_ROW = 3; // Number of images to display per row

const ImageWrapper = styled('img')({
  maxWidth: '200px',
  maxHeight: '200px',
  transition: 'transform 0.3s ease-in-out', // Add a transition for smooth scaling
  '&:hover': {
    transform: 'scale(1.1)', // Scale up the image on hover
  },
  cursor: 'pointer', // Add a cursor pointer to indicate clickable image
});

const UploadedImages = ({ uploadedFiles }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const numberOfRows = Math.ceil(uploadedFiles.length / IMAGES_PER_ROW);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
    setLightboxOpen(false);
  };

  const renderImagesInRow = (startIndex) => {
    const endIndex = Math.min(startIndex + IMAGES_PER_ROW, uploadedFiles.length);
    const rowImages = uploadedFiles.slice(startIndex, endIndex);

    return (
      <Box display="flex" alignItems="center">
        {rowImages.map((file, index) => (
          <Box key={index} p={1}>
            <ImageWrapper
              src={URL.createObjectURL(file)} // Convert file to URL
              alt={file.name}
              onClick={() => handleImageClick(URL.createObjectURL(file))}
            />
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box mt={2}>
      <Typography variant="h6">Uploaded Images:</Typography>
      <List>
        {Array.from({ length: numberOfRows }).map((_, index) => (
          <React.Fragment key={index}>
            <ListItem>{renderImagesInRow(index * IMAGES_PER_ROW)}</ListItem>
            {index < numberOfRows - 1 && <Divider />} {/* Add a divider between rows */}
          </React.Fragment>
        ))}
      </List>
      {lightboxOpen && (
        <ImageLightbox open={lightboxOpen} onClose={handleCloseLightbox} imageSrc={selectedImage} />
      )}
    </Box>
  );
};

export default UploadedImages;
