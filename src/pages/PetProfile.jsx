import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import defaultPet from "../assets/pets-bg.jpg";

const PetProfile = () => {
    const navigate = useNavigate(); // hook to navigate programmatically
    const ownerName = localStorage.getItem("userName") || "Unknown Owner";

    const pet = {
        name: "Buddy",
        type: "Dog",
        breed: "Golden Retriever",
        age: "3 years",
        owner: ownerName,
        description:
            "Buddy is a friendly and energetic dog who loves walks and cuddles.",
        image: defaultPet,
        medicalHistory: [
            "🐶 Vaccinated for rabies",
            "🐶 Treated for ear infection",
            "🐶 Annual checkup done",
        ],
        feedingSchedule: [
            "8:00 AM - Dry food",
            "1:00 PM - Wet food",
            "6:00 PM - Dry food",
        ],
        groomingTips: [
            "Brush twice a week",
            "Bath once a month",
            "Check ears regularly",
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8 md:p-24">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)} // go back to previous page
                className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg shadow-md transition"
            >
                ← Back
            </button>

            {/* Header */}
            <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-lg shadow-md mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center">
                    {pet.name}
                </h1>
                <p className="text-center mt-2 text-lg">
                    {pet.breed} | {pet.type}
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Pet Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                    <img
                        src={pet.image}
                        alt={pet.name}
                        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
                    />
                    <h2 className="text-2xl font-bold">{pet.name}</h2>
                    <p className="text-gray-600">
                        {pet.type} | {pet.breed}
                    </p>
                    <p className="text-gray-600 mt-2">Age: {pet.age}</p>
                    <p className="text-gray-600 mt-2">Owner: {pet.owner}</p>
                </motion.div>

                {/* Pet Info Sections */}
                <div className="space-y-6">
                    {/* Medical History */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h2 className="text-xl font-bold mb-4">
                            Medical History
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            {pet.medicalHistory.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Feeding Schedule */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h2 className="text-xl font-bold mb-4">
                            Feeding Schedule
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            {pet.feedingSchedule.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Grooming Tips */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <h2 className="text-xl font-bold mb-4">
                            Grooming Tips
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            {pet.groomingTips.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PetProfile;
