import React, { useEffect, useContext } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { AppContent } from '../context/AppContext';

const Home = () => {
  const { userData } = useContext(AppContent);

  useEffect(() => {
    console.log('Home mounted, userData:', userData);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-white via-sky-100 to-blue-200">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/bg_img.png')] bg-cover bg-center opacity-20 blur-sm"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-24 px-4">
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default Home;
