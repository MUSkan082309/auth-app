import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContent } from '../context/AppContext'

const Header = () => {
  const { userData } = useContext(AppContent)

  return (
    <div className="flex flex-col items-center mt-24 px-4 text-center">
      
      <img
        src={assets.header_img}
        alt="Profile"
        className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover"
      />

      <h1 className="text-2xl font-bold">
        Hey {userData ? userData.name : 'Developer'} 
      </h1>

    </div>
  )
}

export default Header;
