import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("userType");
    if (storedUser) {
      setUserType(storedUser);
    }
  }, []);

  const handleSignUp = () => {
    navigate("/signup");
  };

  // Hide Navbar on SignUp page
  if (location.pathname === "/signup") {
    return null;
  }

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent tracking-wide cursor-pointer"
          onClick={() => navigate("/")}
        >
          FurEver
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {!userType && null}

          {userType === "PetOwner" && (
            <li className="hover:text-pink-600 cursor-pointer transition">
              Pet Owner
            </li>
          )}
          {userType === "Veterinarian" && (
            <li className="hover:text-pink-600 cursor-pointer transition">
              Veterinarian
            </li>
          )}
          {userType === "Animal Shelter" && (
            <li className="hover:text-pink-600 cursor-pointer transition">
              Animal Shelter
            </li>
          )}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          {!userType && (
            <button
              onClick={handleSignUp}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              Sign Up
            </button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-gray-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          {userType === "PetOwner" && (
            <p className="hover:text-pink-600 cursor-pointer transition">
              Pet Owner
            </p>
          )}
          {userType === "Veterinarian" && (
            <p className="hover:text-pink-600 cursor-pointer transition">
              Veterinarian
            </p>
          )}
          {userType === "Animal Shelter" && (
            <p className="hover:text-pink-600 cursor-pointer transition">
              Animal Shelter
            </p>
          )}

          {!userType && (
            <button
              onClick={handleSignUp}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              Sign Up
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
