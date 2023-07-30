import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';

const StyledDropzone = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Center vertically
  alignItems: 'center', // Center horizontally
  padding: '20px',
  margin: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: theme.palette.primary.main,
  borderStyle: 'dashed',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  outline: 'none',
  transition: theme.transitions.create(['border-color', 'background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
  minHeight: 200,
  cursor: 'pointer',
  '&:hover': {
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
    transform: 'scale(1.03)',
  },
}));

const CustomDropzone = ({ onDrop }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    // Combine the new files with the previously uploaded files
    setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
    if (onDrop) {
      onDrop([...uploadedFiles, ...acceptedFiles]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  return (
    <StyledDropzone {...getRootProps()}>
      <input {...getInputProps()} />
      <Typography variant="body1" align="center">
        {isDragActive ? 'Drop the images here...' : 'Drag and drop images here,\n or click to select images'}
      </Typography>
    </StyledDropzone>
  );
};

export default CustomDropzone;
