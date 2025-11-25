import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-white/90 backdrop-blur-lg shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <div className="w-9 h-9 bg-albatross-green rounded-xl flex items-center justify-center text-white shadow-lg shadow-albatross-green/20 group-hover:scale-105 transition-transform duration-300">
                {/* Unique Focus/Capture Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
                    <circle cx="12" cy="12" r="4" fill="currentColor"/>
                    <path d="M12 8V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 18V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
           </div>
           {/* Logo Text - Cleaned to ensure no background color */}
           <span className="text-2xl font-extrabold tracking-tight text-albatross-green group-hover:text-[#2D7A5F] transition-colors">
             Capture
           </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm font-bold text-gray-600 hover:text-albatross-black transition-colors">Why Capture?</a>
          <a href="#features" className="text-sm font-bold text-gray-600 hover:text-albatross-black transition-colors">Features</a>
          <a href="#testimonials" className="text-sm font-bold text-gray-600 hover:text-albatross-black transition-colors">Stories</a>
          <Button onClick={scrollToDemo} variant="primary" size="sm">
            Book Demo
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-albatross-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-xl md:hidden flex flex-col gap-6 animate-fade-in-down">
          <a href="#problem" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-albatross-black">Why Capture?</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-albatross-black">Features</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-albatross-black">Stories</a>
          <Button onClick={scrollToDemo} fullWidth size="lg">Book Demo</Button>
        </div>
      )}
    </header>
  );
};