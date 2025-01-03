import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-2xl">
          <h2 className="mb-6 text-2xl font-semibold text-center text-primary-600">
            Welcome!
          </h2>
          <form onSubmit="">
            <div className="mb-4">
              <label className="block mb-2 text-lg text-start font-semibold text-gray-700">
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
              <label className="block mb-2 text-lg text-start font-semibold text-gray-700">
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
              className="w-full py-2 text-white transition bg-primary-500 rounded-md hover:bg-primary-600"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/forgot-password"
              className="text-sm text-primary-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
