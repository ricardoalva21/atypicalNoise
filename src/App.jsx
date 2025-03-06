import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import DJs from "./pages/DJs";
import Music from "./pages/Music";
import Store from "./pages/Store";
import Radio from "./pages/Radio";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* Contenedor Principal */}
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Video de Fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1, 
          }}
        >
          <source src="/videos/atypical_sinestesia 01 .mp4" type="video/mp4" />
        </video>

        {/* Header */}
        <Header />

        {/* Contenedor de contenido */}
        <Container
          maxWidth={false}
          sx={{
            flex: 1,
            width: "100%",
            maxWidth: "1200px",
            padding: { xs: 2, md: 4 }, 
            marginTop: { xs: 8, md: 10 }, 
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: 2,
            minHeight: "80vh",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/djs" element={<DJs />} />
            <Route path="/music" element={<Music />} />
            <Route path="/store" element={<Store />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>

        {/* Footer */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
