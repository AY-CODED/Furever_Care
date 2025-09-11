// src/pages/AnimalShelter.jsx
import React, { useState } from "react";
import { PawPrint, Heart, Calendar } from "lucide-react";

const AnimalShelter = () => {
  const username = localStorage.getItem("userName") || "Shelter Manager";

  // Sample pets data
  const pets = [
    {
      id: 1,
      type: "dog",
      name: "Max",
      age: "2 years",
      breed: "Golden Retriever",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
      desc: "Friendly and energetic, loves kids and outdoor play.",
    },
    {
      id: 2,
      type: "cat",
      name: "Bella",
      age: "1 year",
      breed: "Persian Cat",
      image: "https://placekitten.com/400/300",
      desc: "Calm and cuddly, perfect for a quiet household.",
    },
    {
      id: 3,
      type: "rabbit",
      name: "Snowy",
      age: "6 months",
      breed: "Angora Rabbit",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b", // rabbit photo
      desc: "Gentle and fluffy, enjoys hopping around freely.",
    },
    {
      id: 4,
      type: "dog",
      name: "Rocky",
      age: "3 years",
      breed: "German Shepherd",
      image: "https://placedog.net/500?id=2",
      desc: "Loyal and protective, ideal for a family home.",
    },
  ];

  const [filter, setFilter] = useState("all");
  const filteredPets =
    filter === "all" ? pets : pets.filter((pet) => pet.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 py-12 px-6 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <PawPrint className="w-16 h-16 text-purple-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800">
            Welcome, {username}! 🏡
          </h1>
          <p className="mt-2 text-gray-600 text-lg">
            Manage your shelter, showcase adoptable pets, and share success
            stories with the community.
          </p>
        </header>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {["all", "dog", "cat", "rabbit"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === type
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-600 hover:bg-pink-100"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Adoptable Pets Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-600 bg-clip-text text-transparent mb-6 text-center">
            Adoptable Pets
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPets.map((pet) => (
              <div
                key={pet.id}
                className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {pet.name}
                </h3>
                <p className="text-gray-600">
                  {pet.age} • {pet.breed}
                </p>
                <p className="text-gray-500 mt-2">{pet.desc}</p>
                <button className="mt-4 bg-gradient-to-r from-purple-300 to-pink-600 px-4 py-2 rounded-full hover:bg-green-600 transition">
                  Adopt Me
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-600 bg-clip-text text-transparent mb-6 text-center">
            Success Stories ❤
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <Heart className="w-8 h-8 text-pink-500 mb-4" />
              <img
                src="https://placedog.net/400?id=3"
                alt="Adopted dog"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600">
                Max found his forever home with the Johnson family and now spends
                his days running in their backyard.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <Heart className="w-8 h-8 text-pink-500 mb-4" />
              <img
                src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=500&q=60"
                alt="Adopted cat"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600">
                Bella was adopted by Sarah, who says Bella has become her best
                cuddle buddy at home.
              </p>
            </div>
          </div>
        </section>

        {/* Event Announcements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-600 bg-clip-text text-transparent mb-6 text-center">
            Upcoming Events 📅
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <Calendar className="w-8 h-8 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Adoption Drive
              </h3>
              <p className="text-gray-600">
                Join us this Saturday at the city park to meet adorable pets
                ready for adoption!
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <Calendar className="w-8 h-8 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Free Vaccination Camp
              </h3>
              <p className="text-gray-600">
                Bring your pets for free vaccinations this Sunday at our
                shelter.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Map */}
<section>
  <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-300 to-pink-600 bg-clip-text text-transparent ">
    Contact Us 📍
  </h2>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Contact Form */}
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-2xl font-semibold text-center  bg-gradient-to-r from-purple-300 to-pink-600 bg-clip-text text-transparent ">
        Get in Touch
      </h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Message
          </label>
          <textarea
            placeholder="Type your message here..."
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full  bg-gradient-to-r from-pink-500 to-purple-600   py-2 rounded-lg  transition"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Map */}
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-center  bg-gradient-to-r from-purple-300 to-pink-600 bg-clip-text text-transparent ">
        Find Us Here
      </h3>
      <div className="w-full h-72">
        <iframe
          title="Shelter Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.37031670651!2d3.379205!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c6f1f9b7cfb%3A0x7a56e4c9e8ed45d1!2sLagos!5e0!3m2!1sen!2sng!4v1678188888888!5m2!1sen!2sng"
          className="w-full h-full rounded-lg border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</section>
      </div>
    </div>
  );
};

export default AnimalShelter;