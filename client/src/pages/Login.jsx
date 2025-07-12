import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const [authMode, setAuthMode] = useState('Sign Up'); // 'Sign Up' or 'Login'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const endpoint = authMode === 'Sign Up' ? '/api/auth/register' : '/api/auth/login';
      const payload = authMode === 'Sign Up' ? { name, email, password } : { email, password };

      const { data } = await axios.post(`${backendUrl}${endpoint}`, payload, { withCredentials: true });

      if (data.success) {
        setIsLoggedin(true);
        await getUserData();
        toast.success(data.message || `${authMode} successful`);
        setTimeout(() => navigate('/'), 800);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400 relative">
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt="logo"
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer"
      />

      <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
        <h2 className="text-3xl font-semibold text-white text-center mb-3">
          {authMode === 'Sign Up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-center text-sm mb-6">
          {authMode === 'Sign Up' ? 'Create your account' : 'Login to your account'}
        </p>

        <form onSubmit={onSubmitHandler}>
          {authMode === 'Sign Up' && (
            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.person_icon} alt="person" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="bg-transparent outline-none text-white w-full"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <img src={assets.mail_icon} alt="mail" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-transparent outline-none text-white w-full"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <img src={assets.lock_icon} alt="lock" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-transparent outline-none text-white w-full"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <p
            onClick={() => navigate('/reset-password')}
            className="mb-4 text-indigo-500 cursor-pointer hover:underline"
          >
            Forgot Password?
          </p>

          <button
            type="submit"
            className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium transition-all hover:opacity-90"
          >
            {authMode === 'Sign Up' ? 'Sign Up' : 'Login'}
          </button>

          <p className="mt-6 text-center text-indigo-400">
            {authMode === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span
              className="text-indigo-500 cursor-pointer hover:underline"
              onClick={() => setAuthMode(authMode === 'Sign Up' ? 'Login' : 'Sign Up')}
            >
              {authMode === 'Sign Up' ? 'Login' : 'Sign Up'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
