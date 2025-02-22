import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed mt-4 left-4 right-4 md:left-64 md:right-64 z-20 w-auto transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg /80 shadow-lg" : "bg-blue-400 shadow-md"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="relative flex h-16 items-center justify-between gap-4 px-6">
          
          <div className="flex flex-1 items-center space-x-3">
            <button
              className="block md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <img src="/logo/logo.png" className="h-8" />
            <span className="text-white text-lg font-semibold tracking-wide">Cybersentinels</span>
          </div>

          <nav className="hidden md:flex items-center space-x-5">
            <a href="#home" className="text-white text-sm font-medium hover:text-black">
              Home
            </a>
            <a href="#keyf" className="text-white text-sm font-medium hover:text-black">
              Features
            </a>
            <a href="#contact" className="text-white text-sm font-medium hover:text-black">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-lg hover:bg-blue-500 hover:shadow-md"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div
            className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="mt-10 flex flex-col space-y-4">
              <a href="#home" className="text-black text-sm font-medium hover:text-black">
                Home
              </a>
              <a href="#prep" className="text-black text-sm font-medium hover:text-black">
              Features
              </a>
              <a href="#mock" className="text-black text-sm font-medium hover:text-black">
                Contact
              </a>
              <Link
                to="/login"
                className="mt-6 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400 hover:shadow-md"
              >
                Login
              </Link>
              <Link
                to="/iam"
                className="px-4 py-2 text-sm font-medium text-blue-500 border border-white rounded-lg hover:bg-blue-500 hover:text-white hover:shadow-md"
              >
                Register
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;