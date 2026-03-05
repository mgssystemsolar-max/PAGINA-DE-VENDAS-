import React from 'react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-slate-100">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Development Sitemap</h1>
        <p className="text-slate-500 mb-6 text-sm">
          You are currently in a <strong>Preview Environment</strong>. 
          Use this menu to navigate to different pages.
        </p>
        
        <nav className="space-y-3">
          <Link 
            to="/lp-video" 
            className="block w-full p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">
                Video Landing Page
              </span>
              <span className="text-xs font-mono text-slate-400 bg-slate-200 px-2 py-1 rounded">
                /lp-video
              </span>
            </div>
          </Link>
          
          {/* Add more routes here as needed */}
        </nav>

        <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 text-center">
          Hybrid Routing Architecture Active
        </div>
      </div>
    </div>
  );
}
