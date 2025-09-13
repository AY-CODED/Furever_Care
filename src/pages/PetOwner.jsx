// src/pages/PetOwnerLanding.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import petDog from "../assets/dog.jpg";
import petCat from "../assets/pets-bg.jpg";
import teamData from "../data/team.json";
import TopTicker from "../components/TopTicker";

import {
    Heart,
    PawPrint,
    Home,
    Menu,
    X,
    UtensilsCrossed,
    HeartPulse,
    Scissors,
    Dumbbell,
    AlertTriangle,
    Stethoscope,
    PhoneCall,
    User,
    Mail,
    MessageSquare,
    Phone,
    MapPin,
} from "lucide-react";

const PetOwner = () => {
    const userName = localStorage.getItem("userName") || "Pet Lover";

    const [menuOpen, setMenuOpen] = useState(false);
    const [time, setTime] = useState(new Date());
    const [location, setLocation] = useState("Fetching location...");

    // Clock update
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    // Get geolocation
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setLocation(
                        `Lat: ${pos.coords.latitude.toFixed(
                            2
                        )}, Lon: ${pos.coords.longitude.toFixed(2)}`
                    );
                },
                () => {
                    setLocation("Location unavailable");
                }
            );
        } else {
            setLocation("Geolocation not supported");
        }
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-12 py-12">
            {/* Floating Side Menu Button */}
            <TopTicker />
            <div className="fixed top-20 right-6 z-50">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
                >
                    {menuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Side Menu */}
            {menuOpen && (
                <div className="fixed top-20 right-20 bg-white shadow-2xl rounded-2xl p-4 z-50 w-48">
                    <ul className="space-y-3 font-semibold text-gray-700">
                        <li
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => scrollTo("about")}
                        >
                            About Us
                        </li>
                        <li
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => scrollTo("care")}
                        >
                            Pet Care
                        </li>
                        <li
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => scrollTo("products")}
                        >
                            Products
                        </li>
                        <li
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => scrollTo("emergency")}
                        >
                            Emergency
                        </li>
                        <li
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => scrollTo("feedback")}
                        >
                            Feedback
                        </li>
                        <li
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => scrollTo("contact")}
                        >
                            Contact
                        </li>
                        <li
                            className="cursor-pointer hover:text-blue-600"
                            onClick={() => scrollTo("team")}
                        >
                            Our Team
                        </li>
                    </ul>
                </div>
            )}

            {/* Decorative Background Shapes */}
            <div className="absolute top-10 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-blue-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-10 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-indigo-400 rounded-full blur-3xl opacity-40"></div>

            {/* Hero Section */}
            <div
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl grid md:grid-cols-2 gap-6 overflow-hidden mt-20"
                id="home"
            >
                {/* Left Section */}
                <div className="p-6 sm:p-10 flex flex-col justify-center text-left">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                        <PawPrint className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                        <span className="text-blue-700 font-semibold text-sm sm:text-base">
                            FurEver Care
                        </span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-snug">
                        Find a Loving Home <br /> For Furry Friends
                    </h1>

                    <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-lg">
                        Every pet deserves a forever family. Adopt today and
                        give them the love, care, and happiness they deserve.
                    </p>

                    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:scale-105 transition">
                            <span className="flex items-center gap-2 justify-center">
                                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                                Adopt Now
                            </span>
                        </button>
                        <button className="border border-blue-400 text-blue-600 px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <img
                            src={petDog}
                            alt="Dog"
                            className="w-full sm:w-48 h-48 sm:h-64 object-cover rounded-2xl shadow-lg border-4 border-white hover:scale-105 transition-transform"
                        />
                        <img
                            src={petCat}
                            alt="Cat"
                            className="w-full sm:w-48 h-48 sm:h-64 object-cover rounded-2xl shadow-lg border-4 border-white hover:scale-105 transition-transform"
                        />
                    </div>
                </div>
            </div>

            {/* Pet Owner Dashboard */}
            <div className="w-full max-w-6xl mt-16 sm:mt-32 px-2 sm:px-0">
                <motion.header
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.3,
                        }}
                        className="flex justify-center mb-4"
                    >
                        <PawPrint className="w-16 h-16 text-blue-600 drop-shadow-lg" />
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                        Welcome, {userName}! 🐾
                    </h1>

                    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Care for your pets, book appointments, and shop for
                        essentials — all in one place.
                    </p>
                </motion.header>
            </div>

            {/* About Us */}
            <section
                id="about"
                className="max-w-6xl w-full py-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl shadow-lg"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                        About Us
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
                        We are dedicated to creating a safe and loving
                        environment for all pets. Our mission is to connect
                        families with furry friends and provide tools to care
                        for them.
                    </p>
                </motion.div>

                {/* Icons Row */}
                <div className="grid sm:grid-cols-3 gap-8 mt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
                    >
                        <div className="flex justify-center mb-4">
                            <PawPrint className="w-12 h-12 text-blue-500" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Pet Love</h3>
                        <p className="text-gray-500">
                            Caring for pets with passion and devotion.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
                    >
                        <div className="flex justify-center mb-4">
                            <Heart className="w-12 h-12 text-indigo-500" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">
                            Forever Homes
                        </h3>
                        <p className="text-gray-500">
                            Helping pets find safe, loving families.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
                    >
                        <div className="flex justify-center mb-4">
                            <Home className="w-12 h-12 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Community</h3>
                        <p className="text-gray-500">
                            Building a network of pet lovers worldwide.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pet Care */}
            <section id="care" className="max-w-6xl w-full py-20">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"
                >
                    Pet Care Sections
                </motion.h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <Link
                        to="/petcare"
                        className="hover:text-blue-500 transition-colors"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
                        >
                            <PawPrint className="w-12 h-12 text-blue-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Pet Profile
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Manage and update your pet’s profile.
                            </p>
                        </motion.div>
                    </Link>

                    <Link to="/feeding-guide">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center cursor-pointer"
                        >
                            <UtensilsCrossed className="w-12 h-12 text-indigo-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Feeding Guide
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Nutrition and feeding schedules.
                            </p>
                        </motion.div>
                    </Link>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
                    >
                        <Link
                            to="/health-tips"
                            className="flex flex-col items-center"
                        >
                            <HeartPulse className="w-12 h-12 text-red-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Health Tips
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Keep your pets healthy and active.
                            </p>
                        </Link>
                    </motion.div>

                    <Link to="/grooming">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
                        >
                            <Scissors className="w-12 h-12 text-blue-400 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Grooming Videos
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Step-by-step guides to keep pets clean and
                                stylish.
                            </p>
                        </motion.div>
                    </Link>

                    <Link to="/training">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
                        >
                            <Dumbbell className="w-12 h-12 text-green-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Training Tips
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Train your pets with effective techniques.
                            </p>
                        </motion.div>
                    </Link>
                </div>
            </section>

            {/* --- All other sections remain the same, just replace classes:
                  from-pink-500 → from-blue-600
                  to-purple-600 → to-indigo-700
                  text-pink-500 → text-blue-600
                  text-purple-500 → text-indigo-600
                  border-pink-400 → border-blue-400
                  bg-pink-50 → bg-blue-50
                  bg-purple-50 → bg-indigo-50
                  etc.
             --- */}
        </div>
    );
};

export default PetOwner;
