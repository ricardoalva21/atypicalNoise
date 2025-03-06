import React from "react";
import { Typography, Box } from "@mui/material";

const Music = () => {
  return (
    <Box sx={{ textAlign: "center", color: "white", pb: 7 }}>
      <Typography variant="h3" gutterBottom>
        Labels - Releases - DJ Sets - Podcast
      </Typography>
      <Typography variant="body1">
        Biblioteca musical, listas, videos, Promos,
      </Typography>
      <Box sx={{ width: "100%", my: 4 }}>
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/853360139&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
            fontWeight: "100",
            marginTop: "4px",
          }}
        >
          <a
            href="https://soundcloud.com/artromusic"
            title="Artro"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Artro
          </a>{" "}
          ·
          <a
            href="https://soundcloud.com/artromusic/sets/releases-artro"
            title="Artro Releases"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Artro Releases
          </a>
        </div>
      </Box>
      <Box sx={{ my: 4 }}>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1358508958&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
            fontWeight: 100,
            marginTop: "4px",
          }}
        >
          <a
            href="https://soundcloud.com/atypicalnoise"
            title="Atypical Noise"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Atypical Noise
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/atypicalnoise/atypical-podcast-033-elk-joy"
            title="Atypical Podcast 033 Elk Joy"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Atypical Podcast 033 Elk Joy
          </a>
        </div>
      </Box>
    </Box>
  );
};

export default Music;
