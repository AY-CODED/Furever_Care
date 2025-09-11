import React from "react";
import { useNavigate } from "react-router-dom";
import { PawPrint, Stethoscope, Home } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "../assets/pets-bg.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="w-full min-h-screen flex flex-col font-sans">
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 text-center px-6 md:px-0 max-w-3xl"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl leading-tight"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            FurEver Care 🐾
          </motion.h1>
          <motion.p
            className="text-gray-200 text-lg md:text-xl mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Because they deserve forever love ❤️ <br />
            Adoption • Veterinary Care • Pet Products
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={() => navigate("/signup")}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold text-lg shadow hover:scale-105 transition-transform"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <PawPrint className="w-14 h-14 text-pink-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Pet Owner</h3>
            <p className="text-gray-600">
              Find loving pets waiting for a forever home. Make adoption easy and joyful.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <Stethoscope className="w-14 h-14 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Veterinary</h3>
            <p className="text-gray-600">
              Connect with trusted vets for checkups, vaccinations, and health tips.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <Home className="w-14 h-14 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Animal Shelter</h3>
            <p className="text-gray-600">
              Help animals in need find homes, care, and compassion.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="py-24 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Join Our Pet-Loving Community
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Let’s make the world a happier place, one paw at a time 🐶🐱
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="bg-white text-pink-600 px-10 py-4 rounded-full font-semibold text-lg md:text-xl shadow-lg hover:scale-105 transition-transform"
        >
          Sign Up Now
        </button>
      </motion.section>
    </div>
  );
};

export default LandingPage;
