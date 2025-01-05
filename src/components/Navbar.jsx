import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const isProfilePage = location.pathname === "/profile";

  return (
    <nav className="absolute top-0 left-0 right-0 bg-white bg-opacity-100 border md:fixed">
      <div className="container flex flex-wrap items-center justify-between px-4 py-2 mx-auto lg:py-4 md:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-black md:text-4xl"
        >
          <img src={logo} alt="logo" className="w-12 h-12 md:w-20 md:h-20" />
          <span className="ml-2 text-primary-600">Learnify</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-slate-500 hover:text-black focus:outline-none"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-slate-500 hover:text-black focus:outline-none"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden menu md:block md:w-auto" id="navbar">
          <ul className="flex text-black md:flex-wrap md:space-x-5 md:text-xl">
            {!isAuthenticated ? (
              <>
                <li
                  className="px-4 py-2 text-lg text-black transition bg-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100"
                  onClick={() => navigate("/login")}
                >
                  Login
                </li>
                <li
                  className="px-4 py-2 text-lg text-white transition rounded-md cursor-pointer bg-primary-600 hover:bg-primary-700"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </li>
              </>
            ) : (
              <>
                <li
                  className={`px-4 py-2 text-lg transition rounded-md cursor-pointer ${
                    isProfilePage
                      ? "bg-primary-700 text-white"
                      : "bg-primary-600 text-white hover:bg-primary-700"
                  }`}
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </li>
                <li
                  className="px-4 py-2 text-lg text-white transition bg-red-600 rounded-md cursor-pointer hover:bg-red-700"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Mobile Overlay */}
      {navbarOpen && <MenuOverlay setNavbarOpen={setNavbarOpen} />}
    </nav>
  );
};

export default Navbar;
