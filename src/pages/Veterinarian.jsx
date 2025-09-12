import React, { useState } from "react";

const PetProfile = () => {
  const ownerName = localStorage.getItem("userName") || "Unknown Owner";

  const [pet, setPet] = useState({
    name: "Buddy",
    breed: "Golden Retriever",
    owner: ownerName,
    description: "Buddy is a friendly and energetic pet who loves walks and cuddles.",
    image: "",
    medicalHistory: ["🐶 Vaccinated for rabies", "🐶 Treated for ear infection"],
    feedingSchedule: ["8:00 AM - Dry food", "1:00 PM - Wet food", "6:00 PM - Dry food"],
    groomingTips: ["Brush twice a week", "Bath once a month", "Check ears regularly"],
  });

  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [tempImage, setTempImage] = useState("");

  const handleEdit = (field) => {
    setEditingField(field);
    if (field === "image") setTempImage(pet.image);
    else setTempValue(pet[field].join ? pet[field].join("\n") : pet[field]);
  };

  const handleSave = (field) => {
    if (field === "image") setPet({ ...pet, image: tempImage });
    else if (field === "basic")
      setPet({
        ...pet,
        name: tempValue.name || pet.name,
        breed: tempValue.breed || pet.breed,
        owner: tempValue.owner || pet.owner,
        description: `${tempValue.name || pet.name} is a friendly and energetic pet who loves walks and cuddles.`,
      });
    else setPet({ ...pet, [field]: tempValue.split("\n") });
    setEditingField(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setTempImage(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-12">
      {/* Header */}
      <div className="bg-purple-700 text-white p-6 rounded-xl shadow-md mb-8 text-center">
        {editingField === "basic" ? (
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Pet Name"
              defaultValue={pet.name}
              className="p-2 rounded w-full text-black"
              onChange={(e) => setTempValue({ ...tempValue, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Breed"
              defaultValue={pet.breed}
              className="p-2 rounded w-full text-black"
              onChange={(e) => setTempValue({ ...tempValue, breed: e.target.value })}
            />
            <input
              type="text"
              placeholder="Owner"
              defaultValue={pet.owner}
              className="p-2 rounded w-full text-black"
              onChange={(e) => setTempValue({ ...tempValue, owner: e.target.value })}
            />
            <div className="flex gap-2 justify-center mt-2">
              <button onClick={() => handleSave("basic")} className="bg-green-500 px-4 py-2 rounded text-white">Save</button>
              <button onClick={() => setEditingField(null)} className="bg-gray-400 px-4 py-2 rounded text-white">Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold">{pet.name}</h1>
            <p className="mt-2">{pet.breed} | Owner: {pet.owner}</p>
            <button onClick={() => handleEdit("basic")} className="mt-2 px-3 py-1 bg-white text-purple-700 rounded">Edit Info</button>
          </>
        )}
      </div>

      {/* Pet Card */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image & Description */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <img
            src={pet.image || "https://via.placeholder.com/150"}
            alt={pet.name}
            className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
          />
          {editingField === "image" ? (
            <div className="space-y-2">
              <input type="text" placeholder="Image URL" value={tempImage} onChange={(e) => setTempImage(e.target.value)} className="w-full p-2 border rounded" />
              <input type="file" accept="image/*" onChange={handleImageUpload} />
              <div className="flex gap-2 justify-center mt-2">
                <button onClick={() => handleSave("image")} className="bg-green-500 px-4 py-2 rounded text-white">Save</button>
                <button onClick={() => setEditingField(null)} className="bg-gray-400 px-4 py-2 rounded text-white">Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <p className="text-gray-700 mt-2">{pet.description}</p>
              <button onClick={() => handleEdit("image")} className="mt-2 px-3 py-1 bg-white text-purple-700 rounded">Change Image</button>
            </>
          )}
        </div>

        {/* Editable Info Sections */}
        <div className="space-y-6">
          {["medicalHistory", "feedingSchedule", "groomingTips"].map((field) => (
            <div key={field} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{field.replace(/([A-Z])/g, " $1")}</h2>
                {editingField !== field && <button onClick={() => handleEdit(field)} className="text-purple-700 font-semibold">Edit</button>}
              </div>

              {editingField === field ? (
                <div className="space-y-2">
                  <textarea value={tempValue} onChange={(e) => setTempValue(e.target.value)} className="w-full p-2 border rounded text-black" rows={4} />
                  <div className="flex gap-2">
                    <button onClick={() => handleSave(field)} className="bg-green-500 px-4 py-2 rounded text-white">Save</button>
                    <button onClick={() => setEditingField(null)} className="bg-gray-400 px-4 py-2 rounded text-white">Cancel</button>
                  </div>
                </div>
              ) : (
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {pet[field].map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
