import React from 'react';
import { Box, Typography, List, ListItem, Divider } from '@mui/material';

const IMAGES_PER_ROW = 3; // Number of images to display per row

const UploadedImages = ({ uploadedFiles }) => {
  const numberOfRows = Math.ceil(uploadedFiles.length / IMAGES_PER_ROW);

  const renderImagesInRow = (startIndex) => {
    const endIndex = Math.min(startIndex + IMAGES_PER_ROW, uploadedFiles.length);
    const rowImages = uploadedFiles.slice(startIndex, endIndex);

    return (
      <Box display="flex" alignItems="center">
        {rowImages.map((file, index) => (
          <Box key={index} p={1}>
            <img
              src={URL.createObjectURL(file)} // Convert file to URL
              alt={file.name}
              style={{ maxWidth: '200px', maxHeight: '200px' }}
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
    </Box>
  );
};

export default UploadedImages;
