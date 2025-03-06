import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

const MusicPlayer = () => {
  // Array de canciones de ejemplo
  const songs = [
    {
      title: "Canción 1",
      artist: "Artista 1",
      url: "/audio/cancion1.mp3",
    },
    {
      title: "Canción 2",
      artist: "Artista 2",
      url: "/audio/cancion2.mp3",
    },
    {
      title: "Canción 3",
      artist: "Artista 3",
      url: "/audio/cancion3.mp3",
    },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % songs.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    const prevIndex = (currentTrackIndex - 1 + songs.length) % songs.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 0.5,
        backgroundColor: "transparent",
        height: "60px",
        width: "100%",
        gap: { xs: 3, md: 1 },
      }}
    >
      <IconButton onClick={handlePrevious} sx={{ color: "#fff", p: 0.5 }}>
        <SkipPreviousIcon fontSize="small" />
      </IconButton>
      <IconButton onClick={handlePlayPause} sx={{ color: "#fff", p: 0.5 }}>
        {isPlaying ? (
          <PauseIcon fontSize="small" />
        ) : (
          <PlayArrowIcon fontSize="small" />
        )}
      </IconButton>
      <IconButton onClick={handleNext} sx={{ color: "#fff", p: 0.5 }}>
        <SkipNextIcon fontSize="small" />
      </IconButton>
      <Box sx={{ ml: 1, display: { xs: "none", sm: "block" } }}>
        <Typography variant="caption" noWrap sx={{ color: "#fff" }}>
          {songs[currentTrackIndex].title} - {songs[currentTrackIndex].artist}
        </Typography>
      </Box>
      <audio ref={audioRef}>
        <source src={songs[currentTrackIndex].url} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </Box>
  );
};

export default MusicPlayer;
