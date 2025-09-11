// src/pages/PetOwnerLanding.jsx
import React from "react";
import petDog from "../assets/dog.jpg";
import petCat from "../assets/pets-bg.jpg";
import { Heart, PawPrint, Calendar, ShoppingBag } from "lucide-react";

const PetOwnerLanding = () => {
    const userName = localStorage.getItem("userName") || "Pet Lover";

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-12 py-12">
            {/* Decorative Background Shapes */}
            <div className="absolute top-10 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-pink-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-10 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-purple-400 rounded-full blur-3xl opacity-40"></div>

            {/* Hero Section */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl grid md:grid-cols-2 gap-6 overflow-hidden mt-20">
                {/* Left Section */}
                <div className="p-6 sm:p-10 flex flex-col justify-center text-left">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4">
                        <PawPrint className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
                        <span className="text-pink-600 font-semibold text-sm sm:text-base">
                            FurEver Care
                        </span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-snug">
                        Find a Loving Home <br /> For Furry Friends
                    </h1>

                    <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-lg">
                        Every pet deserves a forever family. Adopt today and
                        give them the love, care, and happiness they deserve.
                    </p>

                    <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
                        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:scale-105 transition">
                            <span className="flex items-center gap-2 justify-center">
                                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                                Adopt Now
                            </span>
                        </button>
                        <button className="border border-pink-400 text-pink-500 px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-pink-50 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <img
                            src={petDog}
                            alt="Dog"
                            className="w-full sm:w-48 h-48 sm:h-64 object-cover rounded-2xl shadow-lg border-4 border-white hover:scale-105 transition-transform"
                        />
                        <img
                            src={petCat}
                            alt="Cat"
                            className="w-full sm:w-48 h-48 sm:h-64 object-cover rounded-2xl shadow-lg border-4 border-white hover:scale-105 transition-transform"
                        />
                    </div>
                </div>
            </div>

            {/* Pet Owner Dashboard Section */}
            <div className="w-full max-w-6xl mt-16 sm:mt-32 px-2 sm:px-0">
                {/* Header */}
                <header className="text-center mb-8 sm:mb-12">
                    <div className="flex justify-center mb-4">
                        <PawPrint className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
                        Welcome, {userName}! 🐾
                    </h1>
                    <p className="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-lg">
                        Care for your pets, book appointments, and shop
                        essentials.
                    </p>
                </header>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {/* My Pets */}
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                        <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 mb-3 sm:mb-4" />
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                            My Pets
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                            Keep track of your pets’ health and activities.
                        </p>
                        <button className="bg-red-500 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-red-600 transition text-sm sm:text-base w-full">
                            View Pets
                        </button>
                    </div>

                    {/* Appointments */}
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                        <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 mb-3 sm:mb-4" />
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                            Appointments
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                            Schedule vet visits and check-ups easily.
                        </p>
                        <button className="bg-pink-500 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-pink-600 transition text-sm sm:text-base w-full">
                            Book Now
                        </button>
                    </div>

                    {/* Shop */}
                    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                        <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500 mb-3 sm:mb-4" />
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                            Pet Shop
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                            Discover food, toys, and accessories for your pets.
                        </p>
                        <button className="bg-purple-500 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-purple-600 transition text-sm sm:text-base w-full">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetOwnerLanding;
