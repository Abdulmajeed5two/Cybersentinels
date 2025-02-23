import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {  
  Shield, EyeOff, UserCheck, Trash2, CameraOff, FileWarning,  
  AlertTriangle, ChevronDown, ChevronUp, User, LogOut, Settings, 
  Files
} from "lucide-react";

const Layout = () => {
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const storedUsername = localStorage.getItem("name") || "Guest";
      setUsername(storedUsername);
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("name");
    navigate("/login");
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="w-full md:w-80 bg-white flex flex-col justify-between border-r-2 border-gray-400">
        <div>
          <img src="/logo/main.png" className="px-4 py-3 border-b" />
          <nav className="md:mt-10 mt-5">
            <ul>
              <li className="text-sm text-black hover:bg-gray-100">
                <Link to="/dash" className="px-3 py-4 flex items-center">
                  <Shield className="mr-3" size={20} />
                  Dashboard
                </Link>
              </li>
              <li className="text-sm text-black hover:bg-gray-100">
                <Link to="/dash/fraud-detection" className="px-3 py-4 flex items-center">
                  <AlertTriangle className="mr-3" size={20} />
                  Fraud Detection
                </Link>
              </li>
              <li className="text-sm text-black hover:bg-gray-100">
                <Link to="/dash/deepfake-prevention" className="px-3 py-4 flex items-center">
                  <EyeOff className="mr-3" size={20} />
                  Deepfake Prevention
                </Link>
              </li>
              <li className="text-sm text-black hover:bg-gray-100">
                <Link to="/dash/user-privacy" className="px-3 py-4 flex items-center">
                  <UserCheck className="mr-3" size={20} />
                  User Privacy Protection
                </Link>
              </li>
              <li className="text-sm text-black hover:bg-gray-100">
                <Link to="/dash/content-removal" className="px-3 py-4 flex items-center">
                  <Trash2 className="mr-3" size={20} />
                  Content Removal
                </Link>
              </li>
              <li className="text-sm text-black hover:bg-gray-100">
                <Link to="/dash/cases" className="px-3 py-4 flex items-center">
                  <Files className="mr-3" size={20} />
                  My Cases
                </Link>
              </li>
              <li className="text-sm text-black hover:bg-gray-100">
                <Link to="/dash/hidden-camera-detection" className="px-3 py-4 flex items-center">
                  <CameraOff className="mr-3" size={20} />
                  Hidden Camera Detection
                </Link>
              </li>

              <li className="relative">
                <button  
                  onClick={() => setIsReportsOpen(!isReportsOpen)}  
                  className="w-full text-left flex justify-between items-center text-sm text-black hover:bg-gray-100 px-3 py-4"
                >
                  <span className="flex items-center">
                    <FileWarning className="mr-3" size={20} />
                    Reports
                  </span>
                  {isReportsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {isReportsOpen && (
                  <ul className="ml-12 mt-2 space-y-3 pb-4">
                    <li className="text-gray-500 text-sm cursor-pointer hover:text-black">
                      Fraud Reports
                    </li>
                    <li className="text-gray-500 text-sm cursor-pointer hover:text-black">
                      Deepfake Cases
                    </li>
                    <li className="text-gray-500 text-sm cursor-pointer hover:text-black">
                      Privacy Breaches
                    </li>
                    <li className="text-gray-500 text-sm cursor-pointer hover:text-black">
                      Content Takedowns
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <div className="flex-1 flex flex-col bg-gray-100">
        <header className="w-full bg-white px-6 py-2 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold text-gray-700 animate-fade-in">
            Welcome, {username}!
          </h2>
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 hover:bg-gray-200 px-3 py-2 rounded-lg"
            >
              <User size={20} />
              {isProfileOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                    <Settings size={16} className="mr-2" />
                    Settings
                  </li>
                  <li 
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center" 
                    onClick={handleLogout}
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
