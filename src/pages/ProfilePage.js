import React, { useState } from "react";
import {
  Button,
  Container,
  Box,
  Paper,
  Toolbar,
} from "@mui/material";
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
          {/* Toolbar adds some padding, I dont think it's useful for anything else
              because the actual toolbar is displayed from AppBarComponent*/}
          <Toolbar sx={{ height: 100 }} />
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
