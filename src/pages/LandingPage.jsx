import React from "react";
import { useNavigate } from "react-router-dom";
import { PawPrint, Stethoscope, Home } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "../assets/pets-bg.jpg";

const LandingPage = () => {
    const navigate = useNavigate();

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className="w-full min-h-screen flex flex-col">
            {/* Hero Section */}
            <div
                className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <motion.div
                    className="relative z-10 max-w-3xl px-6"
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        FurEver Care 🐾
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-200 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Because they deserve forever love ❤️ <br />
                        Adoption • Veterinary Care • Pet Products
                    </motion.p>
                    <motion.div
                        className="mt-8 flex justify-center gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <button
                            onClick={() => navigate("/signup")}
                            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:scale-110 transition-transform"
                        >
                            Get Started
                        </button>
                        {/* <button
              onClick={() => navigate("/about")}
              className="bg-white/90 text-gray-800 py-3 px-6 rounded-xl font-semibold text-lg shadow-md hover:scale-105 transition-transform"
            >
              Learn More
            </button> */}
                    </motion.div>
                </motion.div>
            </div>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <motion.div
                    className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10"
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
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition"
                    >
                        <PawPrint className="w-12 h-12 text-pink-500 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Pet Owner</h3>
                        <p className="text-gray-600">
                            Find loving pets waiting for a forever home. Make
                            adoption easy and joyful.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition"
                    >
                        <Stethoscope className="w-12 h-12 text-purple-500 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Veterinary</h3>
                        <p className="text-gray-600">
                            Connect with trusted vets for checkups,
                            vaccinations, and health tips.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition"
                    >
                        <Home className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">
                            Animal Shelter
                        </h3>
                        <p className="text-gray-600">
                            Help animals in need find homes, care, and
                            compassion.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Call to Action */}
            <motion.section
                className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-center text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-extrabold">
                    Join Our Pet-Loving Community
                </h2>
                <p className="mt-4 text-lg">
                    Let’s make the world a happier place, one paw at a time 🐶🐱
                </p>
                <button
                    onClick={() => navigate("/signup")}
                    className="mt-8 bg-white text-pink-600 px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:scale-110 transition-transform"
                >
                    Sign Up Now
                </button>
            </motion.section>
        </div>
    );
};

export default LandingPage;
