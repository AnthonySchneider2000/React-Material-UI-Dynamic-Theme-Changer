import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const UploadedImages = ({ uploadedFiles }) => {
  return (
    <Box mt={2}>
      <Typography variant="h6">Uploaded Images:</Typography>
      <List>
        {uploadedFiles.map((file, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <img
                src={URL.createObjectURL(file)} // Convert file to URL
                alt={file.name}
                style={{ maxWidth: '200px', maxHeight: '200px', marginRight: '10px' }}
              />
              <ListItemText primary={file.name} secondary={`${(file.size / 1024).toFixed(2)} KB`} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default UploadedImages;
