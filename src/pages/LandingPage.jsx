import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PawPrint, Stethoscope, Home } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "../assets/pets-bg.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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
          className="relative z-10 text-center px-4 sm:px-6 md:px-0 max-w-3xl"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl leading-tight"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            FurEver Care 🐾
          </motion.h1>
          <motion.p
            className="text-gray-200 text-base sm:text-lg md:text-xl mt-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Because they deserve forever love ❤️ <br />
            Adoption • Veterinary Care • Pet Products
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={() => navigate("/signup")}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform w-full sm:w-auto"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold text-lg shadow hover:scale-105 transition-transform w-full sm:w-auto"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[{
            icon: <PawPrint className="w-12 h-12 text-pink-500 mb-4" />,
            title: "Pet Owner",
            desc: "Find loving pets waiting for a forever home. Make adoption easy and joyful."
          },{
            icon: <Stethoscope className="w-12 h-12 text-purple-500 mb-4" />,
            title: "Veterinary",
            desc: "Connect with trusted vets for checkups, vaccinations, and health tips."
          },{
            icon: <Home className="w-12 h-12 text-green-500 mb-4" />,
            title: "Animal Shelter",
            desc: "Help animals in need find homes, care, and compassion."
          }].map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              {feature.icon}
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="py-16 sm:py-24 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center px-4 sm:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Join Our Pet-Loving Community
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          Let’s make the world a happier place, one paw at a time 🐶🐱
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="bg-white text-pink-600 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-lg sm:text-xl shadow-lg hover:scale-105 transition-transform"
        >
          Sign Up Now
        </button>
      </motion.section>
    </div>
  );
};

export default LandingPage;
