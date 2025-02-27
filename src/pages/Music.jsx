import React from 'react';
import { Typography, Box } from '@mui/material';

const Music = () => {
  return (
    <Box sx={{ textAlign: 'center', color: 'white' }}>
      <Typography variant="h3" gutterBottom>
        Labels - Releases - DJ Sets - Podcast
      </Typography>
      <Typography variant="body1">
        Welcome to our website. Here, you'll find everything about our music and events.
      </Typography>
    </Box>
  );
};

export default Music;