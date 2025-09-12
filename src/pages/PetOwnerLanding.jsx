// src/pages/PetOwnerLanding.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PaperPlane, X, MessageSquare } from "lucide-react";
import petDog from "../assets/dog.jpg";
import petCat from "../assets/pets-bg.jpg";
import catlitter from "../assets/catlitter.jpg"
const PetOwnerLanding = () => {
  const userName = localStorage.getItem("userName") || "Pet Lover";

  // Products Data
  const products = [
    { name: "Dog Food", price: "₦5000", desc: "Nutritious dry food.", img: petDog, type: "Dog" },
    { name: "Dog Collar", price: "₦2500", desc: "Adjustable stylish collar.", img: petDog, type: "Dog" },
    { name: "Dog Shampoo", price: "₦3500", desc: "Gentle grooming shampoo.", img: petDog, type: "Dog" },
    { name: "Cat Toy", price: "₦2000", desc: "Fun toy for cats.", img: petCat, type: "Cat" },
    { name: "Cat Bed", price: "₦6500", desc: "Comfy resting space for cats.", img: petCat, type: "Cat" },
    { name: "Cat Litter", price: "₦4000", desc: "Clumping litter with odor control.", img: catlitter, type: "Cat" },
    { name: "Bird Cage", price: "₦15000", desc: "Spacious cage for birds.", img: petDog, type: "Bird" },
    { name: "Bird Seeds", price: "₦3000", desc: "Nutritious seeds for all birds.", img: petCat, type: "Bird" },
    { name: "Fish Tank", price: "₦20000", desc: "Aquarium for fish lovers.", img: petDog, type: "Fish" },
    { name: "Fish Food", price: "₦2500", desc: "Balanced diet for fish.", img: petCat, type: "Fish" },
    { name: "Rabbit Hay", price: "₦3500", desc: "Healthy hay for rabbits.", img: petDog, type: "Rabbit" },
    { name: "Rabbit Hutch", price: "₦18000", desc: "Cozy wooden home for rabbits.", img: petCat, type: "Rabbit" },
    { name: "Hamster Wheel", price: "₦5000", desc: "Fun exercise wheel.", img: petDog, type: "Hamster" },
    { name: "Hamster Cage", price: "₦12000", desc: "Spacious cage for hamsters.", img: petCat, type: "Hamster" },
  ];

  const [category, setCategory] = useState("All");

  // Chat states
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, fromUser: true }]);
    setInput("");

    // Simple automated response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for your question! We'll get back to you soon 🐾", fromUser: false },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-12 relative">
      {/* Welcome Header */}
      <div className="w-full max-w-6xl mt-16 sm:mt-32 px-2 sm:px-0 mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Welcome, {userName}! 🐾
          </h1>
          <p className="mt-2 text-gray-600 text-lg">
            Care for your pets, book appointments, and shop essentials.
          </p>
        </header>
      </div>

      {/* Products Section */}
      <section id="products" className="max-w-6xl w-full py-20 mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Pet Product Showcase
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["All", ...new Set(products.map((p) => p.type))].map((filter) => (
            <button
              key={filter}
              onClick={() => setCategory(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                category === filter
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products
            .filter((p) => (category === "All" ? true : p.type === category))
            .map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-bold text-lg">{p.name}</h3>
                <p className="text-gray-600 text-sm flex-grow">{p.desc}</p>
                <p className="font-semibold mt-3">{p.price}</p>
                <button className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full w-full hover:opacity-90 transition">
                  Buy Now
                </button>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Chat Box */}
      <div className="fixed bottom-5 right-5 z-50">
        {/* Chat Button */}
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg"
          >
            <MessageSquare className="w-6 h-6" />
          </button>
        )}

        {/* Chat Window */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="w-80 h-96 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-purple-600 text-white flex justify-between items-center p-4">
                <h4 className="font-semibold">Pet Chat</h4>
                <button onClick={() => setChatOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-2">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-lg text-sm ${
                      msg.fromUser ? "bg-purple-100 self-end" : "bg-gray-100 self-start"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-3 border-t border-gray-200 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask a question..."
                  className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                  onClick={sendMessage}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl"
                >
                  <PaperPlane className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PetOwnerLanding;
