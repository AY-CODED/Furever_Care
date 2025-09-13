// src/components/VeterinarianPage.jsx
import React, { useState } from "react";

const VeterinarianPage = () => {
  const [vet, setVet] = useState({
    name: "",
    specialization: "",
    contact: "",
    image: "",
  });
  const [preview, setPreview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "imageURL") {
      setPreview(value);
      setVet((p) => ({ ...p, image: value }));
    } else {
      setVet((p) => ({ ...p, [name]: value }));
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setVet((p) => ({ ...p, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!vet.name || !vet.specialization || !vet.contact || !preview) {
      alert("Please fill all fields and upload an image.");
      return;
    }
    setSubmitted(true);
  };

  // --- Step 1: Registration Form ---
  if (!submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-blue-900 px-4 py-24">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg space-y-4 border border-gray-200"
        >
          <h2 className="text-3xl font-extrabold text-center text-blue-700">
            Veterinarian Registration 🩺
          </h2>
          <p className="text-center text-gray-500 mb-4">
            Fill in your details to create your professional profile
          </p>

          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={vet.name}
              onChange={handleChange}
              placeholder="Dr. Jane Doe"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Specialization */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Specialization
            </label>
            <input
              type="text"
              name="specialization"
              value={vet.specialization}
              onChange={handleChange}
              placeholder="Veterinary Surgeon"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Contact
            </label>
            <input
              type="text"
              name="contact"
              value={vet.contact}
              onChange={handleChange}
              placeholder="+234 812 345 6789 or email@example.com"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-lg bg-white text-gray-600"
            />
          </div>

          {/* Or Image URL */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Or Image URL
            </label>
            <input
              type="url"
              name="imageURL"
              onChange={handleChange}
              placeholder="https://example.com/vet.jpg"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Live preview */}
          {preview && (
            <div className="mt-4 flex items-center gap-4 p-3 border rounded-lg bg-gray-50">
              <img
                src={preview}
                alt="preview"
                className="w-16 h-16 rounded-full object-cover border"
              />
              <p className="text-sm text-gray-600">
                Preview of your profile picture
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-3 rounded-lg hover:opacity-90 transition font-semibold"
          >
            Submit & View Profile
          </button>
        </form>
      </div>
    );
  }

  // --- Step 2: Profile Page ---
  const slots = [
    { time: "09:00 AM", status: "Available" },
    { time: "10:00 AM", status: "Booked" },
    { time: "11:00 AM", status: "Available" },
    { time: "01:00 PM", status: "Booked" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24 pb-24">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Dr. {vet.name}</h1>
          <p className="text-sm opacity-90">{vet.specialization}</p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-white text-blue-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Edit Profile
        </button>
      </header>

      {/* Profile Info + Appointments */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Profile */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <img
            src={vet.image}
            alt="Vet"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
          />
          <h2 className="text-2xl font-bold text-gray-800">{vet.name}</h2>
          <p className="text-gray-600">{vet.specialization}</p>
          <p className="mt-2 text-gray-700">{vet.contact}</p>
        </div>

        {/* Appointments */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-700">
            Appointment Slots
          </h2>
          <ul className="space-y-3">
            {slots.map((s) => (
              <li
                key={s.time}
                className={`p-3 rounded-lg flex justify-between items-center ${
                  s.status === "Available"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                <span className="font-medium">{s.time}</span>
                <span className="text-sm">{s.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
        <h2 className="text-xl font-bold mb-4 text-blue-700">
          Sample Pet Medical Histories
        </h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">🐶 Max — Golden Retriever</h3>
            <p className="text-sm">
              Chronic ear infection • Treated with antibiotics and ear cleaning.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">🐱 Bella — Persian Cat</h3>
            <p className="text-sm">
              Dental tartar and gingivitis • Treated with scaling and antibiotics.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">🐇 Snowy — Rabbit</h3>
            <p className="text-sm">
              Mites infestation • Treated with topical medicine and follow-up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeterinarianPage;