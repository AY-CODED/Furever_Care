import { motion } from "framer-motion";
import { FaBone, FaDrumstickBite, FaFish, FaAppleAlt, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FeedingGuide = () => {
  const navigate = useNavigate();

  const schedule = [
    { time: "8:00 AM", meal: "Dry Food", icon: <FaBone /> },
    { time: "1:00 PM", meal: "Wet Food", icon: <FaDrumstickBite /> },
    { time: "6:00 PM", meal: "Dry Food", icon: <FaBone /> },
    { time: "9:00 PM", meal: "Treats/Snacks", icon: <FaAppleAlt /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex flex-col items-center px-6 md:px-20 py-16 space-y-12">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start flex items-center gap-2 mb-4 mt-4 text-purple-700 font-semibold hover:text-purple-900 transition"
      >
        <FaArrowLeft /> Back
      </button>

      {/* Page Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
      >
        Feeding Guide
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-700 text-center max-w-2xl text-lg"
      >
        Keep your furry friend happy and healthy with this daily feeding schedule! Each meal is carefully planned for their nutrition and energy.
      </motion.p>

      {/* Feeding Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {schedule.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="flex flex-col items-center justify-center p-6 rounded-3xl shadow-2xl bg-gradient-to-tr from-pink-200 via-purple-200 to-yellow-200 hover:from-purple-300 hover:to-pink-300 transition-all duration-500 cursor-pointer"
          >
            <div className="text-4xl mb-4 text-purple-600">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{item.meal}</h3>
            <p className="text-gray-700 font-medium">{item.time}</p>
          </motion.div>
        ))}
      </div>

      {/* Fun Tip Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-3xl w-full"
      >
        <h3 className="text-2xl font-bold mb-4 text-purple-700">Pro Tip 🌟</h3>
        <p className="text-gray-700 text-lg">
          Always provide fresh water alongside meals, and reward good behavior with treats! Your pet will love you even more.
        </p>
      </motion.div>
    </div>
  );
};

export default FeedingGuide;
