import React from 'react';
import { Typography, Box } from '@mui/material';

const Store = () => {
  return (
    <Box sx={{ textAlign: 'center', color: 'white' }}>
      <Typography variant="h3" gutterBottom>
       Store
      </Typography>
      <Typography variant="body1">
        Working with Sinestesia Record Store.
      </Typography>
    </Box>
  );
};

export default Store;