// src/components/SocialLinks.jsx
import React from "react";
import { Box, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialLinks = () => {
  return (
    <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
      <IconButton
        component="a"
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#fff" }}
      >
        <InstagramIcon fontSize="small" />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#fff" }}
      >
        <FacebookIcon fontSize="small" />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.youtube.com/"
        rel="noopener noreferrer"
        sx={{ color: "#fff" }}
      >
        <YouTubeIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default SocialLinks;
