import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500 selection:text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-black z-0" />
        
        <div className="container mx-auto px-6 py-24 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-indigo-300 tracking-wide uppercase">New Release</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Build Faster.<br />Scale Smarter.
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            The ultimate platform for modern developers. Deploy your applications with 
            confidence using our hybrid architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 transition-colors">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 border border-white/10 backdrop-blur-sm transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </header>

      {/* Video Placeholder Section */}
      <section className="py-20 bg-zinc-900/50 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-zinc-800 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              {/* Play Button */}
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 z-10">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
              </div>
              
              <div className="absolute bottom-8 left-8 z-10">
                <p className="text-sm font-medium text-indigo-400 mb-1">Watch Demo</p>
                <h3 className="text-2xl font-semibold">See how it works in 2 minutes</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
