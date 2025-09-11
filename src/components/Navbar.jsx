import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ dispatch, state }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userType, setUserType] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Get user info from localStorage on mount
  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    const storedUserName = localStorage.getItem("userName");

    if (storedUserName && storedUserType) {
      setUserName(storedUserName);
      setUserType(storedUserType);
      // update global state if using context/reducer
      dispatch?.({ type: "auth/login", value: { userName: storedUserName, userType: storedUserType } });
    }
  }, [dispatch]);

  const handleSignUp = () => navigate("/signup");
  const handleSignIn = () => navigate("/login");
  const handleLogout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("userName");
    setUserName(null);
    setUserType(null);
    navigate("/");
  };

  // Hide Navbar on SignUp and Login pages
  if (location.pathname === "/signup" || location.pathname === "/login") return null;

  const isLandingPage = location.pathname === "/";

  const handleLogoClick = () => {
    if (!userName) navigate("/"); // normal go home
    else window.location.reload(); // refresh instead of navigating home
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent tracking-wide cursor-pointer"
          onClick={handleLogoClick}
        >
          FurEver
        </div>

        {/* Desktop Links / Buttons */}
        <div className="hidden md:flex items-center gap-6">
          {/* Pet Owner Menu Links */}
          {userType === "PetOwner" && (
            <div className="flex gap-4">
              <button className="text-gray-700 hover:text-pink-500">About Us</button>
              <button className="text-gray-700 hover:text-pink-500">Pet Care</button>
              <button className="text-gray-700 hover:text-pink-500">Sections</button>
              <button className="text-gray-700 hover:text-pink-500">Pet Product</button>
              <button className="text-gray-700 hover:text-pink-500">Showcase</button>
              <button className="text-gray-700 hover:text-pink-500">Emergency</button>
              <button className="text-gray-700 hover:text-pink-500">Vet Help</button>
              <button className="text-gray-700 hover:text-pink-500">Feedback Page</button>
              <button className="text-gray-700 hover:text-pink-500">Contact Us</button>
            </div>
          )}

          {/* Auth Buttons / Dropdown */}
          {!userName ? (
            isLandingPage ? (
              <button
                onClick={handleSignIn}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleSignUp}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
              >
                Sign Up
              </button>
            )
          ) : (
            <div className="relative">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="flex flex-col items-end">
                  <span className="font-semibold text-gray-800">{userName}</span>
                  <span className="text-sm text-gray-500 -mt-1">{userType}</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-gray-700 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          {userType === "PetOwner" && (
            <div className="flex flex-col gap-2">
              <button className="text-gray-700 hover:text-pink-500">About Us</button>
              <button className="text-gray-700 hover:text-pink-500">Pet Care</button>
              <button className="text-gray-700 hover:text-pink-500">Sections</button>
              <button className="text-gray-700 hover:text-pink-500">Pet Product</button>
              <button className="text-gray-700 hover:text-pink-500">Showcase</button>
              <button className="text-gray-700 hover:text-pink-500">Emergency</button>
              <button className="text-gray-700 hover:text-pink-500">Vet Help</button>
              <button className="text-gray-700 hover:text-pink-500">Feedback Page</button>
              <button className="text-gray-700 hover:text-pink-500">Contact Us</button>
            </div>
          )}

          {!userName ? (
            isLandingPage ? (
              <button
                onClick={handleSignIn}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-full shadow-md hover:scale-105 transition-transform"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleSignUp}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-full shadow-md hover:scale-105 transition-transform"
              >
                Sign Up
              </button>
            )
          ) : (
            <div className="flex flex-col items-start">
              <span className="font-semibold text-gray-800">{userName}</span>
              <span className="text-sm text-gray-500 -mt-1">{userType}</span>
              <button
                onClick={handleLogout}
                className="mt-2 w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
