import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Music, ArrowRight, Lock } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add Supabase Auth
    navigate('/setup');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-slate-700">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
            <Lock className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Enter the vibe zone.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">University Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition focus:ring-1 focus:ring-purple-500"
              placeholder="you@university.edu"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 group"
          >
            Continue with Email
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <span className="h-px bg-slate-700 flex-1"></span>
          <span className="text-slate-500 text-sm px-4">OR</span>
          <span className="h-px bg-slate-700 flex-1"></span>
        </div>

        <button 
          onClick={() => navigate('/setup')}
          className="mt-6 w-full bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2"
        >
          <Music className="w-5 h-5" />
          Connect Spotify
        </button>

        <p className="mt-8 text-center text-slate-500 text-sm">
          Don't have an account? <Link to="/setup" className="text-purple-400 hover:underline">Get Started</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
