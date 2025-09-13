// src/pages/SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PawPrint, Stethoscope, Home } from "lucide-react";
import bgImage from "../assets/pets-bg.jpg";

const SignUp = ({ dispatch }) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userName || !password || !userType) {
            alert("Please fill all fields!");
            return;
        }

        localStorage.setItem("userType", userType);
        localStorage.setItem("userName", userName);
        localStorage.setItem("password", password);

        dispatch({ type: "auth/login", value: { userName, userType } });

        // 🔥 trigger storage event so Navbar updates immediately
        window.dispatchEvent(new Event("storage"));

        // Redirect based on user type
        if (userType === "pet-owner") {
            navigate("/pet-owner");
        } else if (userType === "Veterinarian") {
            navigate("/veterinary");
        } else if (userType === "Animal Shelter") {
            navigate("/shelter");
        } else {
            navigate("/");
        }
    };

    const userOptions = [
        {
            value: "pet-owner",
            label: "Pet Owner",
            icon: <PawPrint className="w-8 h-8 mb-2 text-pink-400" />,
            desc: "Adopt and care for your pets ❤️",
        },
        {
            value: "Veterinarian",
            label: "Veterinarian",
            icon: <Stethoscope className="w-8 h-8 mb-2 text-purple-400" />,
            desc: "Help keep pets healthy 🩺",
        },
        {
            value: "Animal Shelter",
            label: "Animal Shelter",
            icon: <Home className="w-8 h-8 mb-2 text-green-400" />,
            desc: "Find homes for lovely animals 🏡",
        },
    ];

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20"
            >
                <h1 className="text-3xl font-bold text-center text-white mb-2">
                    Create Account 🐾
                </h1>
                <p className="text-center text-gray-300 mb-6">
                    Join our FurEver family today!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Username */}
                    <div>
                        <label className="block text-sm text-gray-200 mb-2">
                            Username:
                        </label>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="John"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm text-gray-200 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="Enter a password"
                            required
                        />
                    </div>

                    {/* User Type */}
                    <div>
                        <label className="block text-sm text-gray-200 mb-3">
                            Choose Your Role
                        </label>
                        <div className="grid md:grid-cols-3 gap-4">
                            {userOptions.map((option) => (
                                <div
                                    key={option.value}
                                    onClick={() => setUserType(option.value)}
                                    className={`cursor-pointer p-3 rounded-xl border flex flex-col items-center justify-center text-center transition transform hover:-translate-y-1 ${
                                        userType === option.value
                                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105 border-transparent"
                                            : "bg-white/10 text-gray-200 border-white/20 hover:border-blue-400"
                                    }`}
                                >
                                    <div className="flex items-center justify-center mb-2">
                                        {option.icon}
                                    </div>
                                    <h3 className="font-semibold">
                                        {option.label}
                                    </h3>
                                    <p className="text-xs mt-1 opacity-80">
                                        {option.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg transition-transform"
                    >
                        Sign Up
                    </motion.button>
                </form>

                <p className="text-center text-gray-300 mt-6">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-blue-400 cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </motion.div>
        </div>
    );
};

export default SignUp;
