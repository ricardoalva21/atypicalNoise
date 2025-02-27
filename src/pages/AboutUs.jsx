import React from 'react';
import { Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ textAlign: 'center', color: 'white' }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
       Filosofia - ideologias - hacia donde vamos - que hemos hecho 
      </Typography>
    </Box>
  );
};

export default AboutUs;
