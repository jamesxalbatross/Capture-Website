import React from 'react';
import { Button } from './ui/Button';

export const ProductShowcase = () => {
    const scrollToDemo = () => {
        document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section className="bg-albatross-green py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        {/* Decor Blobs - Updated with Pink for more brand alignment */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-albatross-pink rounded-full blur-[100px] opacity-25"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                See The Command Centre in Action
            </h3>
            <p className="text-green-50 mb-10 max-w-2xl mx-auto text-xl font-medium">
                Replace your spreadsheets. Get complete control.
            </p>
            <Button onClick={scrollToDemo} variant="white" size="lg" className="text-albatross-green shadow-xl hover:scale-105">
                Book Your 15-Minute Demo
            </Button>
        </div>
    </section>
  );
};