import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box 
      sx={{ 
        textAlign: 'center', 
        padding: { xs: 3, sm: 5 }, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        color: 'white', 
        borderRadius: 3,
        maxWidth: { xs: "90%", sm: "600px", md: "800px" },
        margin: "auto",
        marginTop: { xs: 3, md: 5 } 
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ fontSize: { xs: "1.8rem", md: "3rem" } }}>
        Welcome<br/> We Love Music
      </Typography>
      <Typography variant="h6"  sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
        Discover the underground electronic music, curated by passionate DJs from around the world.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        component={Link} 
        to="/music"
        sx={{ marginTop: 2, fontSize: { xs: "0.8rem", md: "1rem" }, padding: { xs: "6px 12px", md: "10px 20px" } }}
      >
        Explore Music
      </Button>
    </Box>
  );
};

export default Home;
