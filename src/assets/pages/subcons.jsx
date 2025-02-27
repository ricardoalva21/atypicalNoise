import React from "react";
import video1 from "../videos/subcons_1.mp4";

const Subcons = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Video de fondo */}
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover" 
                src={video1} 
                autoPlay 
                loop 
                muted
            />
            
            {/* Contenido encima del video */}
            <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                <h1 className="text-white text-4xl font-bold">Subcons</h1>
            </div>
        </section>
    );
};

export default Subcons;
