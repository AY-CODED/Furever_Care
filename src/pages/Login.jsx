// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Lock } from "lucide-react";
import bgImage from "../assets/pets-bg.jpg"; // replace with your image

const Login = ({ state, dispatch }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get stored credentials
        const storedUser = localStorage.getItem("userName");
        const storedPass = localStorage.getItem("password");
        const storedRole = localStorage.getItem("userType");

        if (username === storedUser && password === storedPass) {
            alert(
                `Welcome back ${storedUser}! You are logged in as ${storedRole}.`
            );

            // 🔥 dispatch login state
            dispatch({ type: "auth/login", value: { userName: storedUser, userType: storedRole } });

            // 🔥 trigger storage event so Navbar updates immediately
            window.dispatchEvent(new Event("storage"));

            navigate(`/${storedRole}`);
        } else {
            alert("Invalid username or password ❌");
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Login Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20"
            >
                <h1 className="text-3xl font-bold text-center text-white mb-2">
                    Welcome Back 🐾
                </h1>
                <p className="text-center text-gray-300 mb-6">
                    Login to continue your journey
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Username */}
                    <div>
                        <label className="block text-sm text-gray-200 mb-2">
                            Username
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 w-5 h-5 text-blue-400" />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full pl-10 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm text-gray-200 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 25px rgba(236,72,153,0.6)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg transition-transform"
                    >
                        Login
                    </motion.button>
                </form>

                {/* Redirect to Sign Up */}
                <p className="text-center text-gray-300 mt-6">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => navigate("/signup")}
                        className="text-blue-400 cursor-pointer hover:underline"
                    >
                        Sign Up
                    </span>
                </p>
            </motion.div>
        </div>
    );
};

export default Login;
