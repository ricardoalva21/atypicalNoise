import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: { xs: 1, md: 2 },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Menú Hamburguesa en Móviles */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Contenedor de enlaces y logo en el centro */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {/* Enlaces a la izquierda del logo */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button color="inherit" component={Link} to="/about-us">
              About Us
            </Button>
            <Button color="inherit" component={Link} to="/djs">
              DJs
            </Button>
            <Button color="inherit" component={Link} to="/music">
              Music
            </Button>
          </Box>

          {/* Logo en el centro */}
          <Box>
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Logo"
                style={{ height: "50px", cursor: "pointer" }}
              />
            </Link>
          </Box>

          {/* Enlaces a la derecha del logo */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button color="inherit" component={Link} to="/store">
              Store
            </Button>
            <Button color="inherit" component={Link} to="/radio">
              Radio
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </Box>
        </Box>

        {/* Drawer para móviles */}
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              width: 250,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "white",
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Button fullWidth color="inherit" component={Link} to="/" onClick={handleDrawerToggle}>
              Home
            </Button>
            <Button fullWidth color="inherit" component={Link} to="/about-us" onClick={handleDrawerToggle}>
              About Us
            </Button>
            <Button fullWidth color="inherit" component={Link} to="/djs" onClick={handleDrawerToggle}>
              DJs
            </Button>
            <Button fullWidth color="inherit" component={Link} to="/music" onClick={handleDrawerToggle}>
              Music
            </Button>
            <Button fullWidth color="inherit" component={Link} to="/store" onClick={handleDrawerToggle}>
              Store
            </Button>
            <Button fullWidth color="inherit" component={Link} to="/radio" onClick={handleDrawerToggle}>
              Radio
            </Button>
            <Button fullWidth color="inherit" component={Link} to="/login" onClick={handleDrawerToggle}>
              Login
            </Button>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
