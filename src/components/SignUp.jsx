import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!fullname.trim()) {
      errors.fullname = "Full name is required.";
    } else if (fullname.trim().length < 3) {
      errors.fullname = "Full name must be at least 3 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address.";
    }

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!password.trim()) {
      errors.password = "Password is required.";
    } else if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters, include one number and one special character.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await registerUser({ fullname, email, password });
      alert(response.message);
      navigate("/");
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-2xl">
          <h2 className="mb-6 text-2xl font-semibold text-center text-primary-600">
            Sign up
          </h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label className="block mb-2 text-lg font-semibold text-gray-700 text-start">
                Full name
              </label>
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
              {errors.fullname && (
                <p className="mt-1 text-sm text-red-500">{errors.fullname}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-lg font-semibold text-gray-700 text-start">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-lg font-semibold text-gray-700 text-start">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white transition rounded-md bg-primary-500 hover:bg-primary-600"
            >
              SignUp
            </button>
          </form>
          <div className="flex flex-col mt-4 text-center ">
            <span>Already have an account?</span>
            <Link
              to="/login"
              className="text-sm text-primary-500"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
