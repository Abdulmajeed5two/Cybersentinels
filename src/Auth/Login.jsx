import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { House } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Password Toggle Icons
import apiService from "../services/apiService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error("Email and password are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await apiService.post("/auth/login", { email, password });

      toast.success("Login successful! Redirecting...");
      localStorage.setItem("name", response.data.user.name);
      console.log("Login response:", response.data.user.name);

      setTimeout(() => navigate("/dash"), 2000);
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        toast.error(error.response.status === 400 ? "Invalid email or password." : error.response.data.message || "Something went wrong.");
      } else {
        toast.error("Server error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1706554597534-52032971bb55?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="fixed top-0 left-0 h-full w-96 bg-white shadow-lg flex flex-col justify-center px-8">
        {/* Home Button */}
        <Link
          to="/"
          className="absolute top-4 left-4 text-white p-2 rounded-full bg-blue-500 bg-opacity-50 hover:bg-opacity-75"
        >
          <House size={28} />
        </Link>

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome Back
        </h2>

        {/* Login Form */}
        <form onSubmit={handleAuth} className="space-y-6">
          {/* Email Input */}
          <input
            type="email"
            className="w-full px-1 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input with Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-1 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 pr-10"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-2 top-2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Login Button with Loading Spinner */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md flex justify-center items-center transition text-white ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <div className="animate-spin h-5 w-5 border-t-2 border-white border-solid rounded-full"></div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="hover:underline text-blue-600">
            Register
          </Link>
        </p>
      </div>

      {/* Background Content */}
      <div className="ml-96 w-full h-full flex items-center justify-center px-6">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Cybersentinels: AI-Powered Cybersecurity Protection
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
