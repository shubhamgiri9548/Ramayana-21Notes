import React from "react";
import { useNavigate } from "react-router-dom";
import ramImage from "../assets/ram-image.jpeg"; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <img
        src={ramImage}
        alt="Ramayana Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          📜 Ramayana
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md">
          The Epic Tale of Lord Ram
        </p>

        <button
          onClick={() => navigate("/seasons")}
          className="mt-6 px-6 py-3 text-lg font-semibold rounded-full bg-yellow-500 hover:bg-yellow-600 transition-all shadow-lg"
        >
          Watch Now
        </button>
      </div>

      {/* Gradient Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}

export default Home;
