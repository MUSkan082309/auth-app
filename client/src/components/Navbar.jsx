import React, { useContext, useState, useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sendVerificationOtp = async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/auth/send-verify-otp`);
      if (data.success) {
        navigate('/email-verify');
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const logout = async () => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);
      if (data.success) {
        toast.success('Logged out successfully');
        setIsLoggedin(false);
        setUserData(null);
        navigate('/');
      } else {
        toast.error(data.message || 'Logout failed');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="w-full flex justify-between items-center px-4 sm:px-12 py-4 fixed top-0 z-40 backdrop-blur-md bg-white/70 shadow-sm">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="logo"
        className="w-28 sm:w-32 cursor-pointer transition-transform duration-200 hover:scale-105"
        onClick={() => navigate('/')}
      />

      {/* Right Section */}
      {userData ? (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            {userData?.name?.[0]?.toUpperCase() || 'U'}
          </button>

          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded-xl border shadow-lg text-sm overflow-hidden z-50">
              {!userData.isAccountVerified && (
                <li
                  onClick={sendVerificationOtp}
                  className="px-4 py-2 hover:bg-indigo-50 cursor-pointer"
                >
                  Verify Email
                </li>
              )}
              <li
                onClick={logout}
                className="px-4 py-2 hover:bg-indigo-50 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          )}
        </div>
      ) : (
        <button
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 px-6 py-2 border border-gray-500 rounded-full text-gray-800 hover:bg-gray-100 transition duration-200 shadow-sm"
        >
          Login
          <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
