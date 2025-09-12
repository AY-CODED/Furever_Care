// src/pages/PetOwnerLanding.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import petDog from "../assets/dog.jpg";
import petCat from "../assets/pets-bg.jpg";
import teamData from "../data/team.json";

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

const PetOwnerLanding = () => {
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
        <div className="relative min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-12 py-12">
            {/* Floating Side Menu Button */}
            <div className="fixed top-20 right-6 z-50">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition"
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
                            className="cursor-pointer hover:text-pink-500"
                            onClick={() => scrollTo("about")}
                        >
                            About Us
                        </li>
                        <li
                            className="cursor-pointer hover:text-pink-500"
                            onClick={() => scrollTo("care")}
                        >
                            Pet Care
                        </li>
                        <li
                            className="cursor-pointer hover:text-pink-500"
                            onClick={() => scrollTo("products")}
                        >
                            Products
                        </li>
                        <li
                            className="cursor-pointer hover:text-pink-500"
                            onClick={() => scrollTo("emergency")}
                        >
                            Emergency
                        </li>
                        <li
                            className="cursor-pointer hover:text-pink-500"
                            onClick={() => scrollTo("feedback")}
                        >
                            Feedback
                        </li>
                        <li
                            className="cursor-pointer hover:text-pink-500"
                            onClick={() => scrollTo("contact")}
                        >
                            Contact
                        </li>
                        <li
                            className="cursor-pointer hover:text-pink-500"
                            onClick={() => scrollTo("team")}
                        >
                            Our Team
                        </li>
                    </ul>
                </div>
            )}

            {/* Decorative Background Shapes */}
            <div className="absolute top-10 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-pink-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-10 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-purple-400 rounded-full blur-3xl opacity-40"></div>

            {/* Hero Section */}
            <div
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl grid md:grid-cols-2 gap-6 overflow-hidden mt-20"
                id="home"
            >
                {/* Left Section */}
                <div className="p-6 sm:p-10 flex flex-col justify-center text-left">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                        <PawPrint className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
                        <span className="text-pink-600 font-semibold text-sm sm:text-base">
                            FurEver Care
                        </span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-snug">
                        Find a Loving Home <br /> For Furry Friends
                    </h1>

                    <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-lg">
                        Every pet deserves a forever family. Adopt today and
                        give them the love, care, and happiness they deserve.
                    </p>

                    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
                        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:scale-105 transition">
                            <span className="flex items-center gap-2 justify-center">
                                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                                Adopt Now
                            </span>
                        </button>
                        <button className="border border-pink-400 text-pink-500 px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-pink-50 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 p-4 sm:p-6">
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
                    {/* Icon */}
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
                        <PawPrint className="w-16 h-16 text-pink-500 drop-shadow-lg" />
                    </motion.div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Welcome, {userName}! 🐾
                    </h1>

                    {/* Subtext */}
                    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Care for your pets, book appointments, and shop for
                        essentials — all in one place.
                    </p>
                </motion.header>
            </div>

            {/* About Us */}
            <section
                id="about"
                className="max-w-6xl w-full py-20 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl shadow-lg"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
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
                            <PawPrint className="w-12 h-12 text-pink-500" />
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
                            <Heart className="w-12 h-12 text-red-500" />
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
                            <Home className="w-12 h-12 text-purple-500" />
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
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                >
                    Pet Care Sections
                </motion.h2>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Pet Profile */}
                    <Link
                        to="/petcare"
                        className="hover:text-pink-500 transition-colors"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
                        >
                            <PawPrint className="w-12 h-12 text-pink-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Pet Profile
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Manage and update your pet’s profile.
                            </p>
                        </motion.div>
                    </Link>

                    {/* Feeding Guide */}
                    <Link to="/feeding-guide">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center cursor-pointer"
                        >
                            <UtensilsCrossed className="w-12 h-12 text-purple-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Feeding Guide
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Nutrition and feeding schedules.
                            </p>
                        </motion.div>
                    </Link>

                    {/* Health Tips */}
                    <Link
                        to="/health-tips"
                        className="flex flex-col items-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
                        >
                            <HeartPulse className="w-12 h-12 text-red-500 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">
                                Health Tips
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Keep your pets healthy and active.
                            </p>
                        </motion.div>
                    </Link>

                    {/* Grooming Videos */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
                    >
                        <Scissors className="w-12 h-12 text-blue-500 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">
                            Grooming Videos
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Step-by-step guides to keep pets clean and stylish.
                        </p>
                    </motion.div>

                    {/* Training Tips */}
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
                </div>
            </section>

            {/* Products */}
            <section id="products" className="max-w-6xl w-full py-20">
                <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Pet Product Showcase
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {[
                        {
                            name: "Dog Food",
                            price: "₦5000",
                            desc: "Nutritious dry food.",
                            img: petDog,
                        },
                        {
                            name: "Cat Toy",
                            price: "₦2000",
                            desc: "Fun toy for cats.",
                            img: petCat,
                        },
                        {
                            name: "Pet Bed",
                            price: "₦7000",
                            desc: "Soft and cozy bed.",
                            img: petDog,
                        },
                        {
                            name: "Cat Food",
                            price: "₦4500",
                            desc: "Wholesome cat meal.",
                            img: petCat,
                        },
                        {
                            name: "Dog Collar",
                            price: "₦2500",
                            desc: "Adjustable stylish collar.",
                            img: petDog,
                        },
                        {
                            name: "Cat Scratcher",
                            price: "₦6000",
                            desc: "Durable scratching post.",
                            img: petCat,
                        },
                        {
                            name: "Dog Shampoo",
                            price: "₦3500",
                            desc: "Gentle grooming shampoo.",
                            img: petDog,
                        },
                        {
                            name: "Cat Litter",
                            price: "₦4000",
                            desc: "Clumping litter with odor control.",
                            img: petCat,
                        },
                        {
                            name: "Dog Leash",
                            price: "₦3000",
                            desc: "Strong and comfortable leash.",
                            img: petDog,
                        },
                        {
                            name: "Pet Vitamins",
                            price: "₦5500",
                            desc: "Boost immunity and health.",
                            img: petCat,
                        },
                        {
                            name: "Cat Bed",
                            price: "₦6500",
                            desc: "Comfy resting space for cats.",
                            img: petCat,
                        },
                        {
                            name: "Cat Bed",
                            price: "₦6500",
                            desc: "Comfy resting space for cats.",
                            img: petCat,
                        },
                    ].map((p, i) => (
                        <div
                            key={i}
                            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col"
                        >
                            <img
                                src={p.img}
                                alt={p.name}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <h3 className="font-bold text-lg">{p.name}</h3>
                            <p className="text-gray-600 text-sm flex-grow">
                                {p.desc}
                            </p>
                            <p className="font-semibold mt-3">{p.price}</p>
                            <button className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full w-full hover:opacity-90 transition">
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Emergency */}

            <section id="emergency" className="max-w-6xl w-full py-20">
                <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Emergency & Vet Help
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Vet Clinic",
                            contact: "08012345678",
                            icon: (
                                <Stethoscope className="w-10 h-10 text-pink-500" />
                            ),
                        },
                        {
                            name: "Emergency Line",
                            contact: "08123456789",
                            icon: (
                                <AlertTriangle className="w-10 h-10 text-red-500" />
                            ),
                        },
                        {
                            name: "Pet Ambulance",
                            contact: "08098765432",
                            icon: (
                                <PhoneCall className="w-10 h-10 text-purple-500" />
                            ),
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="bg-white rounded-2xl shadow-2xl hover:scale-105 transform transition-all p-6 text-center border-t-4 border-pink-400"
                        >
                            <div className="flex justify-center mb-4">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-xl text-gray-800">
                                {item.name}
                            </h3>
                            <p className="mt-2 text-gray-600">{item.contact}</p>
                            <button className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full shadow hover:opacity-90">
                                Call Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* Feedback */}
            <section id="feedback" className="max-w-6xl w-full py-20">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                >
                    Feedback
                </motion.h2>

                {/* Feedback Form */}
                <motion.form
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto space-y-6 border border-pink-100"
                >
                    {/* Name */}
                    <div className="relative">
                        <User className="absolute left-3 top-3 text-pink-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-purple-500 w-5 h-5" />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition"
                        />
                    </div>

                    {/* Feedback */}
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-pink-400 w-5 h-5" />
                        <textarea
                            placeholder="Write your feedback..."
                            className="w-full pl-10 pr-3 py-3 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-pink-300 outline-none transition"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full w-full font-semibold shadow-lg hover:shadow-xl transition"
                    >
                        Submit Feedback
                    </motion.button>
                </motion.form>
            </section>

            {/* Contact */}
            <section id="contact" className="max-w-6xl w-full py-20">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                >
                    Contact Us
                </motion.h2>

                {/* Contact Info Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {/* Email */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-2xl shadow-xl text-center flex flex-col items-center"
                    >
                        <Mail className="w-10 h-10 text-pink-500 mb-4" />
                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">support@furevercare.com</p>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-2xl shadow-xl text-center flex flex-col items-center"
                    >
                        <Phone className="w-10 h-10 text-purple-500 mb-4" />
                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600">08098765432</p>
                    </motion.div>

                    {/* Address */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-2xl shadow-xl text-center flex flex-col items-center"
                    >
                        <MapPin className="w-10 h-10 text-pink-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-1">Address</h3>
                        <p className="text-gray-600">
                            123 FurEver Lane, Lagos, Nigeria
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="max-w-6xl w-full py-20">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                >
                    Meet Our Team
                </motion.h2>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        { name: "Jane Doe", role: "Vet Specialist" },
                        { name: "John Smith", role: "Pet Trainer" },
                        { name: "Mary Johnson", role: "Nutrition Expert" },
                    ].map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl"
                        >
                            {/* Avatar / Icon */}
                            <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                                <User className="w-12 h-12 text-white" />
                            </div>

                            {/* Name + Role */}
                            <h3 className="text-xl font-semibold text-gray-800">
                                {t.name}
                            </h3>
                            <p className="text-gray-600">{t.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PetOwnerLanding;
