import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

const MenuOverlay = ({ setNavbarOpen }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is logged in (token exists in local storage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-6 bg-black bg-opacity-50">
      <ul className="text-2xl text-white">
        {!isAuthenticated ? (
          <>
            <li className="mb-4">
              <Link
                to="/login"
                onClick={() => setNavbarOpen(false)}
                className="block px-6 py-3 text-black bg-white rounded-md hover:bg-gray-100"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                onClick={() => setNavbarOpen(false)}
                className="block px-6 py-3 text-white rounded-md bg-primary-600 hover:bg-primary-700"
              >
                Signup
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link
              to="/profile"
              onClick={() => setNavbarOpen(false)}
              className="block px-6 py-3 text-white rounded-md bg-primary-600 hover:bg-primary-700"
            >
              Profile
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

MenuOverlay.propTypes = {
  setNavbarOpen: PropTypes.func.isRequired,
};

export default MenuOverlay;
