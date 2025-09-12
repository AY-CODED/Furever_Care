import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaPaw, FaUtensils, FaBath, FaHeartbeat, FaDog } from "react-icons/fa";
import defaultPet from "../assets/pets-bg.jpg"; // default pet image

const sections = [
    {
        label: "Pet Profile",
        path: "/pet-profile",
        icon: <FaPaw size={36} className="text-pink-500" />,
        isProfile: true,
    },
    {
        label: "Feeding Guide",
        path: "/feeding-guide",
        icon: <FaUtensils size={36} className="text-yellow-500" />,
    },
    {
        label: "Grooming Videos",
        path: "/grooming",
        icon: <FaBath size={36} className="text-blue-500" />,
    },
    {
        label: "Health Tips",
        path: "/health-tips",
        icon: <FaHeartbeat size={36} className="text-red-500" />,
    },
    {
        label: "Training Tips",
        path: "/training",
        icon: <FaDog size={36} className="text-green-500" />,
    },
];

const PetCare = () => {
    const navigate = useNavigate(); // hook for back navigation
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 md:px-20 py-16 space-y-16">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="self-start mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg shadow-md transition"
            >
                ← Back
            </button>

            {/* Page Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
            >
                Pet Care Sections
            </motion.h2>

            {/* Sections Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white shadow-lg rounded-2xl p-6 text-center cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                    >
                        {/* Link for Pet Profile card */}
                        {section.isProfile ? (
                            <Link
                                to={section.path}
                                className="flex flex-col items-center"
                            >
                                <img
                                    src={defaultPet}
                                    alt="Default Pet"
                                    className="w-24 h-24 object-cover rounded-full mb-4 shadow-md"
                                />
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                                    {section.label}
                                </h3>
                                <p className="text-gray-500">
                                    Click to explore {section.label.toLowerCase()}
                                </p>
                            </Link>
                        ) : (
                            <div
                                onClick={() =>
                                    (window.location.href = section.path)
                                }
                            >
                                <div className="flex justify-center mb-4">
                                    {section.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                                    {section.label}
                                </h3>
                                <p className="text-gray-500">
                                    Click to explore {section.label.toLowerCase()}
                                </p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PetCare;
