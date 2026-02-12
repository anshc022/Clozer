import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Check, ChevronRight, AlertCircle } from 'lucide-react';
import { getCurrentUser, updateVibes } from '../services/api';

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedVibes, setSelectedVibes] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { user, error } = await getCurrentUser();
      if (error || !user) {
        // Redirect to login if not authenticated (or handle anonymous/guest logic appropriately)
        // For this flow, we'll just log it and potentially let them browse, but saving will fail without a user.
        console.log("No active session found:", error);
      } else {
        setUserId(user.id);
      }
    };
    checkUser();
  }, []);

  const vibes = [
    "Night Owl 🦉", "Techno 🎹", "Matcha 🍵", "Gym Rat 🏋️", 
    "Gamer 🎮", "Bookworm 📚", "Indie 🎸", "Hikikomori 🏠",
    "Raver 🕺", "Foodie 🍜", "Artist 🎨", "Coder 💻"
  ];

  const toggleVibe = (vibe) => {
    if (selectedVibes.includes(vibe)) {
      setSelectedVibes(selectedVibes.filter(v => v !== vibe));
    } else {
      if (selectedVibes.length < 5) {
        setSelectedVibes([...selectedVibes, vibe]);
      }
    }
  };

  const handleFinishSetup = async () => {
    if (!userId) {
      setError("You must be logged in to save your profile.");
      return;
    }
    
    setLoading(true);
    setError(null);

    try {
      const { error } = await updateVibes(userId, selectedVibes);
      if (error) {
        throw error;
      }
      alert("Profile updated successfully!");
      // Navigate to dashboard or home page
    } catch (err) {
      setError(err.message || "Failed to save profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center pt-20 px-6">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="flex items-center gap-2 mb-12">
          <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-purple-500' : 'bg-slate-700'}`}></div>
          <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-purple-500' : 'bg-slate-700'}`}></div>
          <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-purple-500' : 'bg-slate-700'}`}></div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-6 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {step === 1 && (
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">What's your vibe?</h1>
            <p className="text-slate-400 mb-8 text-lg">Pick up to 5 tags that describe your soul.</p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {vibes.map((vibe) => (
                <button
                  key={vibe}
                  onClick={() => toggleVibe(vibe)}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition duration-200 border-2 
                    ${selectedVibes.includes(vibe) 
                      ? 'bg-purple-500/20 border-purple-500 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.3)]' 
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                >
                  {vibe}
                </button>
              ))}
            </div>

            <button
              disabled={selectedVibes.length === 0}
              onClick={() => setStep(2)}
              className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl text-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Next Step <ChevronRight />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in text-center">
            <h1 className="text-4xl font-bold mb-4">Sonic Identity</h1>
            <p className="text-slate-400 mb-8 text-lg">We match based on what you actually listen to.</p>
            
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 mb-8">
              <div className="w-20 h-20 bg-[#1DB954] rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Connect Spotify</h3>
              <p className="text-slate-400 text-sm mb-6">We'll import your top artists and genres. No posting to your account.</p>
              <button className="px-6 py-2 bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold rounded-full transition">
                Authorize Access
              </button>
            </div>

            <div className="flex gap-4">
              <button onClick={() => setStep(1)} className="flex-1 py-4 text-slate-400 hover:text-white transition">Back</button>
              <button onClick={() => setStep(3)} className="flex-1 bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-gray-200 transition">Continue</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in text-center">
            <h1 className="text-4xl font-bold mb-4">You're Ready</h1>
            <p className="text-slate-400 mb-8">Your profile is anonymous until the vibe check is passed.</p>
            
            <div className="w-full h-64 bg-slate-800 rounded-2xl border border-slate-700 mb-8 flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 opacity-50"></div>
               <div className="text-6xl mb-4 animate-pulse">👻</div>
               <h3 className="text-2xl font-bold text-white z-10">Ghost User #{userId ? userId.slice(0, 4) : '???'}</h3>
               <div className="flex gap-2 mt-4 z-10">
                 {selectedVibes.slice(0, 3).map(v => (
                   <span key={v} className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">{v}</span>
                 ))}
               </div>
            </div>

            <button 
              onClick={handleFinishSetup}
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl text-lg hover:opacity-90 transition shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Enter the Pool"}
              {!loading && <Check className="w-5 h-5" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSetup;
