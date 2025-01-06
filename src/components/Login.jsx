import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ email, password });

      if (data.token) {
        // Store token in local storage
        localStorage.setItem("token", data.token);

        alert("Login successful!");
        navigate("/");
      } else {
        setErrorMessage("Invalid credentials");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-2xl">
          <h2 className="mb-6 text-2xl font-semibold text-center text-primary-600">
            Welcome to Learnify!
          </h2>

          {errorMessage && (
            <div className="mb-4 font-medium text-center text-red-600">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold text-gray-700 text-start">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold text-gray-700 text-start">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white transition rounded-md bg-primary-500 hover:bg-primary-600"
            >
              Login
            </button>
          </form>
          <div className="flex flex-col mt-4 text-center">
            <span>Don&apos;t have an account?</span>
            <Link to="/signup" className="text-sm text-primary-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
