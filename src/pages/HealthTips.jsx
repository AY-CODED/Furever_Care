import { motion } from "framer-motion";
import { FaDog, FaCat, FaHeartbeat, FaPaw } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const tips = [
  "Regular vet check-ups keep your pets healthy and catch problems early.",
  "Provide a balanced diet with the right nutrients for your pet's age and breed.",
  "Ensure daily exercise to maintain weight and reduce stress.",
  "Keep vaccinations up-to-date to prevent common diseases.",
  "Maintain dental hygiene to avoid oral health issues.",
  "Observe your pet for behavioral or physical changes and act early.",
];

const HealthTips = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 px-6 md:px-20 py-16 flex flex-col items-center space-y-12">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start flex items-center gap-2 mb-4 mt-4 text-green-700 font-semibold hover:text-green-900 transition"
      >
        <FaPaw /> Back
      </button>

      {/* Page Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
      >
        Pet Health Tips
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-700 text-center max-w-2xl text-lg"
      >
        Keeping your pet healthy is more than just food and play. Follow these tips to ensure your furry friend stays happy, active, and thriving!
      </motion.p>

      {/* Tips Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="flex flex-col items-center justify-center p-6 rounded-3xl shadow-2xl bg-gradient-to-tr from-green-200 via-blue-200 to-yellow-200 hover:from-blue-300 hover:to-green-300 transition-all duration-500 cursor-pointer"
          >
            <FaHeartbeat className="text-red-500 w-12 h-12 mb-4" />
            <p className="text-gray-800 text-center font-medium">{tip}</p>
          </motion.div>
        ))}
      </div>

      {/* Fun Fact Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-3xl w-full"
      >
        <h3 className="text-2xl font-bold mb-4 text-green-700">Did You Know? 🐾</h3>
        <p className="text-gray-700 text-lg">
          Regular exercise and mental stimulation can increase your pet's lifespan and keep them mentally sharp!
        </p>
      </motion.div>
    </div>
  );
};

export default HealthTips;
