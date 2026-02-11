import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Vibe Match
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#mission" className="hover:text-purple-400 transition">Mission</a>
          <a href="#how-it-works" className="hover:text-purple-400 transition">How It Works</a>
          <a href="#login" className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition font-medium">
            Join the Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 md:py-32 text-center">
        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-semibold tracking-wide">
          COMING SOON TO YOUR CAMPUS
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
          Stop Swiping Faces.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Start Matching Souls.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto">
          The first anonymous university matching app based on your music, interests, and pure vibe compatibility.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-gray-100 transition text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Get Early Access
          </button>
          <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition text-lg border border-slate-700">
            Learn More
          </button>
        </div>
      </header>

      {/* Feature Grid */}
      <section id="how-it-works" className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition duration-300">
            <div className="w-14 h-14 bg-purple-900/50 rounded-xl flex items-center justify-center mb-6 text-2xl">
              👻
            </div>
            <h3 className="text-2xl font-bold mb-4">Total Anonymity</h3>
            <p className="text-slate-400">
              No photos. No names. Your profile is a generative art piece based on your unique vibe signature.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-pink-500/50 transition duration-300">
            <div className="w-14 h-14 bg-pink-900/50 rounded-xl flex items-center justify-center mb-6 text-2xl">
              🎵
            </div>
            <h3 className="text-2xl font-bold mb-4">Sonic Matching</h3>
            <p className="text-slate-400">
              We sync with your Spotify to find people who actually get your obscure music taste.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition duration-300">
            <div className="w-14 h-14 bg-red-900/50 rounded-xl flex items-center justify-center mb-6 text-2xl">
              ❄️
            </div>
            <h3 className="text-2xl font-bold mb-4">The Defrost</h3>
            <p className="text-slate-400">
              Chat to reveal. Profiles slowly "defrost" and reveal details as your conversation heats up.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 pt-16 pb-8">
        <div className="container mx-auto px-6 text-center text-slate-500">
          <p>&copy; 2026 Project Vibe Match. Built by Echo & Team.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
