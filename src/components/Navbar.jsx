import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Navbar = ({ dispatch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userType, setUserType] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const petOwnerLinks = [
    { label: "About Us", path: "/about" },
    { label: "Pet Care", path: "/petcare" },
    { label: "Sections", path: "/sections" },
    { label: "Pet Product", path: "/products" },
    { label: "Showcase", path: "/showcase" },
    { label: "Emergency", path: "/emergency" },
    { label: "Vet Help", path: "/vet" },
    { label: "Feedback Page", path: "/feedback" },
    { label: "Contact Us", path: "/contact" },
  ];

  // Load user
  useEffect(() => {
    const loadUser = () => {
      const storedUserType = localStorage.getItem("userType");
      const storedUserName = localStorage.getItem("userName");

      if (storedUserName && storedUserType) {
        setUserName(storedUserName);
        setUserType(storedUserType);
        dispatch?.({
          type: "auth/login",
          value: { userName: storedUserName, userType: storedUserType },
        });
      } else {
        setUserName(null);
        setUserType(null);
      }
    };

    loadUser();
    window.addEventListener("userChanged", loadUser);
    return () => window.removeEventListener("userChanged", loadUser);
  }, [dispatch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-dropdown")) setDropdownOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSignUp = () => navigate("/signup");
  const handleSignIn = () => navigate("/login");

  // ✅ Sign Out = session only (does not clear localStorage)
  const handleSignOut = () => {
    setUserName(null);
    setUserType(null);
    window.dispatchEvent(new Event("userChanged"));
    navigate("/");
  };

  // ✅ Logout = permanent (clears localStorage)
  const handleLogout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("userName");
    setUserName(null);
    setUserType(null);
    window.dispatchEvent(new Event("userChanged"));
    navigate("/");
  };

  if (location.pathname === "/signup" || location.pathname === "/login")
    return null;

  const isLandingPage = location.pathname === "/";
  const handleLogoClick = () => {
    if (!userName) navigate("/");
    else if (userType === "PetOwner") navigate("/petowner");
    else navigate("/");
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          onClick={handleLogoClick}
        >
          FurEver
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {userType === "PetOwner" && (
            <div className="flex gap-4">
              {petOwnerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-gray-700 hover:text-pink-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
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
            <div className="relative user-dropdown">
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
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg py-2">
                  {/* <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link> */}
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
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
            <div className="flex flex-col gap-2">
              {petOwnerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-gray-700 hover:text-pink-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {!userName ? (
            isLandingPage ? (
              <button
                onClick={handleSignIn}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-full shadow-md"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleSignUp}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-full shadow-md"
              >
                Sign Up
              </button>
            )
          ) : (
            <div className="flex flex-col items-start">
              <span className="font-semibold text-gray-800">{userName}</span>
              <span className="text-sm text-gray-500 -mt-1">{userType}</span>
              <button
                onClick={handleSignOut}
                className="mt-2 w-full bg-gray-200 text-gray-800 py-2 rounded-full hover:bg-gray-300 transition"
              >
                Sign Out
              </button>
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
