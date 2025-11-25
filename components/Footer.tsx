import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100 text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity">
           <div className="w-6 h-6 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.5"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
           </div>
           <span className="text-xl font-extrabold tracking-tight text-gray-400">
             Capture
           </span>
        </div>
        <div className="flex gap-6 mb-8 text-sm font-bold text-gray-500">
            <a href="#features" className="hover:text-albatross-black transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-albatross-black transition-colors">Stories</a>
            <a href="#demo-form" className="hover:text-albatross-black transition-colors">Book Demo</a>
        </div>
        <p className="text-gray-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Capture. A product of Albatross. All rights reserved.
        </p>
      </div>
    </footer>
  );
};