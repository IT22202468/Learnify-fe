import { Link } from "react-router-dom";

const MenuOverlay = ({ setNavbarOpen }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center space-y-6">
      <ul className="text-white text-2xl">
        <li className="mb-4">
          <Link
            to="/login"
            onClick={() => setNavbarOpen(false)}
            className="block px-6 py-3 bg-white text-black rounded-md hover:bg-gray-100"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            onClick={() => setNavbarOpen(false)}
            className="block px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuOverlay;
