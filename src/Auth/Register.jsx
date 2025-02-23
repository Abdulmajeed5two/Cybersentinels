import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons for password toggle
import apiService from "../services/apiService";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Validate Email
  const validateEmail = (email) => {
    const allowedDomains = ["gmail.com", "hotmail.com", "yahoo.com"];
    const emailParts = email.split("@");
    if (emailParts.length !== 2) return false;
    return allowedDomains.includes(emailParts[1]);
  };

  // Validate Password
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  // Handle Registration
  const handleAuth = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast.error("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Only Gmail, Hotmail, or Yahoo emails are allowed.");
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        "Password must be at least 8 characters, include an uppercase letter, a number, and a special character."
      );
      return;
    }

    setLoading(true);
    toast.info("Registering...");

    try {
      await apiService.post(
        "/auth/register",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("Registration successful! Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Registration error or server issue.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1706554597534-52032971bb55?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg flex flex-col justify-center px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Register
        </h2>

        <form className="space-y-6" onSubmit={handleAuth}>
          {/* Name Input */}
          <input
            type="text"
            className="w-full px-1 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email Input */}
          <input
            type="email"
            className="w-full px-1 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input with Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-1 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 pr-10"
              placeholder="Password"
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

          {/* Register Button with Loading State */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <div className="animate-spin h-5 w-5 border-t-2 border-white border-solid rounded-full"></div>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>

      {/* Left Side Content */}
      <div className="mr-96 w-full h-full flex items-center justify-center px-6">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Cybersentinels: AI-Powered Cybersecurity Protection
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
