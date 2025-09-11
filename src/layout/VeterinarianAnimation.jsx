// src/components/VeterinarianAnimation.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cat from "./../assets/cat.png"

const VeterinarianAnimation = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // 🎯 Mouse movement (desktop)
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setPos({ x, y });
  };

  // 🎯 Device tilt (mobile)
  useEffect(() => {
    const handleOrientation = (e) => {
      const x = (e.gamma / 45) * 30;
      const y = (e.beta / 45) * 30;
      setPos({ x, y });
    };

    if (typeof DeviceOrientationEvent !== "undefined" && 
        typeof DeviceOrientationEvent.requestPermission === "function") {
      // iOS needs permission
      DeviceOrientationEvent.requestPermission().catch(console.warn);
    }

    window.addEventListener("deviceorientation", handleOrientation, true);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <div
      className="relative flex justify-center items-center h-screen bg-gradient-to-br from-purple-900 to-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background doctor silhouette */}
      <img
        src="/pet-bg.png"
        alt="vet body"
        className="absolute z-10 w-[28rem] select-none pointer-events-none"
      />

      {/* Vet stethoscope (moves slightly with tilt/mouse) */}
      <motion.img
        src="/dog.png"
        alt="stethoscope"
        className="absolute z-20 w-40 select-none pointer-events-none"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      />

      {/* Animal paw (parallax opposite) */}
      <motion.img
        src={cat}
        alt="paw"
        className="absolute bottom-20 w-28 z-0 select-none pointer-events-none opacity-80"
        animate={{ x: -pos.x * 0.5, y: -pos.y * 0.5 }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      />

      {/* Title & Button */}
      <div className="absolute top-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Caring for <span className="text-pink-500">Every Paw</span>
        </h1>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition">
          Book a Vet Visit
        </button>
      </div>
    </div>
  );
};

export default VeterinarianAnimation;
