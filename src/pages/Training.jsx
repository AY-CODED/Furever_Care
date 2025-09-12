import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, PawPrint, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Training = () => {
    const navigate = useNavigate();

    const tips = [
        {
            id: 1,
            title: "Sit & Stay",
            description: "Teach your dog to sit and stay reliably.",
            icon: <Dumbbell className="w-12 h-12 text-green-500" />,
        },
        {
            id: 2,
            title: "Leash Walking",
            description: "No more tug-of-war! Master leash walking.",
            icon: <PawPrint className="w-12 h-12 text-yellow-500" />,
        },
        {
            id: 3,
            title: "Fetch Tricks",
            description: "Train your dog to fetch like a pro.",
            icon: <Dumbbell className="w-12 h-12 text-purple-500" />,
        },
        {
            id: 4,
            title: "Recall Training",
            description: "Always come back when called.",
            icon: <PawPrint className="w-12 h-12 text-blue-500" />,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-16 px-6 sm:px-12 lg:px-24 mt-4">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center mb-8 text-green-800 font-semibold hover:text-green-600"
            >
                <ArrowLeft className="w-5 h-5 mr-2" /> Back
            </button>

            <h1 className="text-4xl font-extrabold text-center text-green-800 mb-12 animate-pulse">
                Pet Training Tips
            </h1>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {tips.map((tip) => (
                    <motion.div
                        key={tip.id}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        whileTap={{ scale: 0.95, rotate: -2 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                        }}
                        className="bg-white p-6 rounded-3xl shadow-2xl flex flex-col items-center text-center cursor-pointer hover:shadow-green-400"
                    >
                        <div className="mb-4">{tip.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                        <p className="text-gray-600 text-sm">
                            {tip.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-16 text-center text-green-700 text-2xl font-bold"
            >
                🐾 Let's make training fun! 🐾
            </motion.div>
        </div>
    );
};

export default Training;
