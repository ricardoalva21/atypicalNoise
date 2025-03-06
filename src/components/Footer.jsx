// src/components/Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import SocialLinks from "./SocialLinks";
import MusicPlayer from "./ MusicPlayer";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 1000,
        pl: { xs: 0, md: 7 },
        pr: { xs: 0, md: 7 },
        pb: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Redes Sociales */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-start",
            flex: 1,
          }}
        >
          <SocialLinks />
        </Box>
        {/* Reproductor*/}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            flex: 1,
          }}
        >
          <MusicPlayer />
        </Box>
      </Box>
      {/* Fila inferior*/}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          mt: { xs: 2, md: 0 },
        }}
      >
        <Typography variant="caption" sx={{ color: "#fff" }}>
          © 2025 Atypical Noise. Todos los derechos reservados.
          <br /> <b>#Its All About Music</b>
        </Typography>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          mt: 1,
        }}
      >
        <SocialLinks />
      </Box>
    </Box>
  );
};

export default Footer;
