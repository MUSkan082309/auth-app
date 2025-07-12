import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContent } from '../context/AppContext';

const Header = () => {
  const { userData } = useContext(AppContent);

  return (
    <div className="flex flex-col items-center mt-24 px-4 text-center text-gray-800">
      <img
        src={assets.header_img}
        alt="Profile"
        className="w-32 h-32 rounded-full shadow-lg border-4 border-white mb-6 object-cover"
      />

      <h1 className="flex items-center gap-2 text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
        Hey {userData ? userData.name : 'Developer'}!
        <img
          className="w-7 sm:w-9 inline-block"
          src={assets.hand_wave}
          alt="Wave Emoji"
        />
      </h1>

      <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-700 mb-4 leading-tight">
        Welcome to Our App 🚀
      </h2>

      <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl">
        Let's start with a quick product tour — you’ll be up and running in no time!
      </p>

      <button className="bg-gray-900 text-white text-sm sm:text-base font-medium px-10 py-3 rounded-full shadow-md hover:bg-gray-800 transition-all duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Header;
