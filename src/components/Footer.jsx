import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center', padding: '10px 0' }}>
      <Typography variant="body2" color="white">
        © 2025 Atypical Noise. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
