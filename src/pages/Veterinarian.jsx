import React, { useState } from "react";

const VeterinarianPage = () => {
    const [vet, setVet] = useState({
        name: "",
        specialization: "",
        contact: "",
        image: "",
    });
    const [submitted, setSubmitted] = useState(false);

    // handle text inputs (name, specialization, contact, image URL)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setVet((prev) => ({ ...prev, [name]: value }));
    };

    // handle file uploads
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setVet((prev) => ({ ...prev, image: reader.result })); // base64 string
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (!submitted) {
        // --- STEP 1: Collect Vet Info ---
        return (
            <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-purple-900 to-black text-white overflow-auto py-26">
                <form
                    onSubmit={handleSubmit}
                    className="bg-black/40 text-gray-200 p-8 rounded-2xl shadow-lg w-96 space-y-4"
                >
                    <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Veterinarian Registration
                    </h2>

                    {/* Name */}
                    <div>
                        <label className="block mb-1 placeholder-gray-300">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Dr. Jane"
                            value={vet.name}
                            onChange={handleChange}
                            required
                            pattern="^[A-Za-z\\s]+$"
                            title="Name should only contain letters and spaces"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>

                    {/* Specialization */}
                    <div>
                        <label className="block mb-1">Specialization:</label>
                        <input
                            type="text"
                            name="specialization"
                            placeholder="Treatment & Surgery"
                            value={vet.specialization}
                            onChange={handleChange}
                            required
                            pattern="^[A-Za-z\\s]+$"
                            title="Specialization should only contain letters and spaces"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>

                    {/* Contact Info */}
                    <div>
                        <label className="block mb-1">
                            Contact Info (Email or Phone):
                        </label>
                        <input
                            type="text"
                            name="contact"
                            placeholder="+234"
                            value={vet.contact}
                            onChange={handleChange}
                            required
                            pattern="^(\\+?\\d{10,15}|[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,})$"
                            title="Enter a valid phone number or email"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block mb-1">Upload Image:</label>
                        <input
                            type="file"
                            required
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>

                    {/* Image URL (optional alternative) */}
                    <div>
                        <label className="block mb-1">
                            Or Enter Image URL:
                        </label>
                        <input
                            type="url"
                            name="image"
                            value={
                                vet.image.startsWith("http") ? vet.image : ""
                            }
                            onChange={handleChange}
                            placeholder="https://example.com/vet.jpg"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600  py-2 rounded-lg transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }

    // --- STEP 2: Vet Profile Page ---
    return (
        <div className="min-h-screen bg-gray-100 p-24">
            <header className="bg-purple-700 text-white p-4 rounded-lg shadow-md mb-6">
                <h1 className="text-3xl font-bold">Welcome, Dr. {vet.name}</h1>
                <p>{vet.specialization}</p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Vet Profile Card */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img
                        src={vet.image || "https://via.placeholder.com/150"}
                        alt="Vet"
                        className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h2 className="text-2xl font-bold">{vet.name}</h2>
                    <p className="text-gray-600">{vet.specialization}</p>
                    <p className="mt-2">{vet.contact}</p>
                </div>

                {/* Appointment Slots */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Appointments</h2>
                    <ul className="space-y-2">
                        <li className="p-2 bg-green-100 rounded">
                            10:00 AM - Available
                        </li>
                        <li className="p-2 bg-red-100 rounded">
                            11:00 AM - Booked
                        </li>
                        <li className="p-2 bg-green-100 rounded">
                            12:00 PM - Available
                        </li>
                        <li className="p-2 bg-red-100 rounded">
                            1:00 PM - Booked
                        </li>
                    </ul>
                </div>
            </div>

            {/* Case Studies */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h2 className="text-xl font-bold mb-4">Sample Case Studies</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        🐶 Max (Golden Retriever) – Treated for ear infection
                    </li>
                    <li>
                        🐱 Bella (Persian Cat) – Dental cleaning and checkup
                    </li>
                    <li>
                        🐇 Snowy (Rabbit) – Vaccinated and treated for mites
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default VeterinarianPage;
