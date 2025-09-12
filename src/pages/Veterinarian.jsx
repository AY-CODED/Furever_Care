import React, { useState, useEffect } from "react";

const Veterinarian = () => {
  // Vet profile (could be fetched from backend; here using localStorage)
  const [vet, setVet] = useState(() => {
    return JSON.parse(localStorage.getItem("vet")) || {
      name: "Dr. Jane Doe",
      email: "vet@example.com",
      profileImage: "",
    };
  });

  const [editingVet, setEditingVet] = useState(false);
  const [tempVet, setTempVet] = useState(vet);

  // Time slots (editable)
  const [timeSlots, setTimeSlots] = useState([
    "Mon 10:00 - 12:00",
    "Tue 14:00 - 16:00",
    "Fri 09:00 - 11:00",
  ]);
  const [editingSlot, setEditingSlot] = useState(false);
  const [tempSlots, setTempSlots] = useState(timeSlots.join("\n"));

  // Case studies / pets
  const ownerName = localStorage.getItem("userName") || "Unknown Owner";
  const [caseStudies, setCaseStudies] = useState([
    {
      name: "Buddy",
      breed: "Golden Retriever",
      owner: ownerName,
      description: "Friendly and energetic, loves walks.",
      image: "",
      medicalHistory: ["Vaccinated for rabies", "Treated for ear infection"],
      feedingSchedule: ["8:00 AM - Dry food", "1:00 PM - Wet food"],
      groomingTips: ["Brush twice a week"],
    },
  ]);

  const [editingCase, setEditingCase] = useState(null);
  const [tempCase, setTempCase] = useState({});

  // Vet edit handlers
  const saveVetProfile = () => {
    setVet(tempVet);
    localStorage.setItem("vet", JSON.stringify(tempVet));
    setEditingVet(false);
  };

  // Time slot handlers
  const saveTimeSlots = () => {
    setTimeSlots(tempSlots.split("\n").filter((s) => s.trim() !== ""));
    setEditingSlot(false);
  };

  // Case study handlers
  const handleCaseEdit = (index) => {
    setEditingCase(index);
    setTempCase({ ...caseStudies[index] });
  };

  const saveCaseStudy = (index) => {
    const updated = [...caseStudies];
    updated[index] = tempCase;
    setCaseStudies(updated);
    setEditingCase(null);
  };

  const handleCaseImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setTempCase({ ...tempCase, image: reader.result });
    reader.readAsDataURL(file);
  };

  const handleVetImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setVet({ ...vet, profileImage: reader.result });
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12 space-y-8">
      {/* Vet Profile */}
      <div className="bg-purple-700 text-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6 mt-10">
        <div className="text-center md:text-left">
          {editingVet ? (
            <div className="space-y-2 text-black">
              <input
                type="text"
                className="p-2 rounded w-full"
                value={tempVet.name}
                onChange={(e) => setTempVet({ ...tempVet, name: e.target.value })}
                placeholder="Name"
              />
              <input
                type="email"
                className="p-2 rounded w-full"
                value={tempVet.email}
                onChange={(e) => setTempVet({ ...tempVet, email: e.target.value })}
                placeholder="Email"
              />
              <div className="flex gap-2 mt-2 justify-center md:justify-start">
                <button
                  onClick={saveVetProfile}
                  className="bg-green-500 px-4 py-2 rounded text-white"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingVet(false)}
                  className="bg-gray-400 px-4 py-2 rounded text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold">{vet.name}</h2>
              <p>{vet.email}</p>
              <button
                onClick={() => setEditingVet(true)}
                className="mt-2 px-3 py-1 bg-white text-purple-700 rounded"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>

        {/* Vet Profile Image with Upload */}
        <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center cursor-pointer relative">
          {vet.profileImage ? (
            <img
              src={vet.profileImage}
              alt="Vet"
              className="w-full h-full object-cover"
              onClick={() => document.getElementById("vetImageInput").click()}
            />
          ) : (
            <div
              className="text-gray-400 text-2xl text-center flex items-center justify-center w-full h-full"
              onClick={() => document.getElementById("vetImageInput").click()}
            >
              Select a Photo
            </div>
          )}
          <input
            type="file"
            id="vetImageInput"
            accept="image/*"
            className="hidden"
            onChange={handleVetImageUpload}
          />
        </div>
      </div>

      {/* Time Slots */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Time Slots</h2>
          {!editingSlot && (
            <button
              onClick={() => setEditingSlot(true)}
              className="text-purple-700 font-semibold"
            >
              Edit
            </button>
          )}
        </div>
        {editingSlot ? (
          <div className="space-y-2">
            <textarea
              value={tempSlots}
              onChange={(e) => setTempSlots(e.target.value)}
              className="w-full p-2 border rounded text-black"
              rows={4}
            />
            <div className="flex gap-2">
              <button
                onClick={saveTimeSlots}
                className="bg-green-500 px-4 py-2 rounded text-white"
              >
                Save
              </button>
              <button
                onClick={() => setEditingSlot(false)}
                className="bg-gray-400 px-4 py-2 rounded text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {timeSlots.map((slot, idx) => (
              <li key={idx}>{slot}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Case Studies */}
      <div className="space-y-6">
        {caseStudies.map((pet, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">{pet.name} Case Study</h2>
              {editingCase !== idx && (
                <button
                  onClick={() => handleCaseEdit(idx)}
                  className="text-purple-700 font-semibold"
                >
                  Edit
                </button>
              )}
            </div>

            {editingCase === idx ? (
              <div className="space-y-2 text-black">
                <input
                  type="text"
                  value={tempCase.name}
                  onChange={(e) => setTempCase({ ...tempCase, name: e.target.value })}
                  placeholder="Pet Name"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  value={tempCase.breed}
                  onChange={(e) => setTempCase({ ...tempCase, breed: e.target.value })}
                  placeholder="Breed"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  value={tempCase.owner}
                  onChange={(e) => setTempCase({ ...tempCase, owner: e.target.value })}
                  placeholder="Owner"
                  className="w-full p-2 border rounded"
                />
                <textarea
                  value={tempCase.description}
                  onChange={(e) =>
                    setTempCase({ ...tempCase, description: e.target.value })
                  }
                  placeholder="Description"
                  className="w-full p-2 border rounded"
                  rows={3}
                />
                <input
                  type="text"
                  value={tempCase.image}
                  placeholder="Image URL"
                  onChange={(e) => setTempCase({ ...tempCase, image: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <input type="file" accept="image/*" onChange={handleCaseImageUpload} />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => saveCaseStudy(idx)}
                    className="bg-green-500 px-4 py-2 rounded text-white"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingCase(null)}
                    className="bg-gray-400 px-4 py-2 rounded text-white"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="md:flex gap-6">
                <img
                  src={pet.image || "https://via.placeholder.com/150"}
                  alt={pet.name}
                  className="w-32 h-32 rounded-full object-cover mb-2 md:mb-0"
                />
                <div>
                  <p className="text-gray-700 mb-1">{pet.description}</p>
                  <p className="text-gray-700">Breed: {pet.breed}</p>
                  <p className="text-gray-700">Owner: {pet.owner}</p>
                  <ul className="list-disc pl-6 text-gray-700 mt-2">
                    <li>Medical History: {pet.medicalHistory.join(", ")}</li>
                    <li>Feeding Schedule: {pet.feedingSchedule.join(", ")}</li>
                    <li>Grooming Tips: {pet.groomingTips.join(", ")}</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Veterinarian;
