import React, { useState } from "react";
import { Button, Container, Box, Paper, Typography } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import CustomDropzone from "../components/CustomDropzone";
import UploadedImages from "../components/UploadedImages";
import Layout from "../components/Layout";

const HomePage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (files) => {
    setUploadedFiles(files);
  };

  return (
    <Layout title="Profile" toolbarHeight={100}>
      {/* content */}
      <Container style={{ textAlign: "center" }}>
        <Box display="flex" flexDirection={"column"} alignItems="center" mt={2}>
          {/* header typography saying profile */}
          <Typography variant="h2" component="h1" gutterBottom>
            Tony Schneider
          </Typography>
          {/* link to edit profile */}
          <Link to="/edit-profile" state={{}}>
            <Button
              variant="contained"
              style={{ margin: "10px" }}
              startIcon={<ManageAccountsIcon />}
            >
              Edit Profile
            </Button>
          </Link>
          <CustomDropzone onDrop={handleDrop} />
          <Box mt={2} sx={{ width: "100%" }}>
            {uploadedFiles.length > 0 && (
              <Paper
                elevation={3}
                style={{ maxHeight: "600px", overflowY: "auto" }}
              >
                <UploadedImages uploadedFiles={uploadedFiles} />
              </Paper>
            )}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default HomePage;
