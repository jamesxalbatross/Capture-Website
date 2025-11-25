import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Play } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-white via-white to-green-50/50">
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-albatross-pink/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-albatross-yellow/20 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000"></div>

      <div className="container relative z-10 px-4 md:px-6 max-w-7xl mx-auto text-center">
        
        {/* Headline */}
        <FadeIn delay={0}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-albatross-black mb-8 leading-[1.1] tracking-tight">
            Stop Losing Enquiries. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-albatross-green to-[#2D7A5F] animate-pulse">
              Start Converting.
            </span>
          </h1>
        </FadeIn>

        {/* Subhead */}
        <FadeIn delay={100}>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
            Capture is the all-in-one <span className="text-albatross-black font-bold">CRM and Email Marketing</span> command centre for golf clubs. Replace chaos with control.
          </p>
        </FadeIn>

        {/* Buttons */}
        <FadeIn delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button onClick={scrollToDemo} variant="primary" size="lg" className="min-w-[200px] shadow-xl shadow-albatross-green/20 group">
              Book a 15-Min Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={scrollToDemo} variant="outline" size="lg" className="min-w-[200px] border-gray-200 text-gray-600 hover:border-albatross-green hover:text-white">
              <Play className="mr-2 w-4 h-4 fill-current" />
              Watch Video
            </Button>
          </div>
        </FadeIn>

        {/* Floating Dashboard Image */}
        <FadeIn delay={400} direction="up" className="relative max-w-6xl mx-auto mt-8 perspective-1000">
          <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white transform md:rotate-x-12 transition-all duration-700 hover:rotate-0 hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] animate-float">
            {/* Browser Header */}
            <div className="bg-gray-50 px-6 py-4 flex items-center gap-3 border-b border-gray-100">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center">
                <div className="bg-white text-xs text-gray-400 py-1 px-4 rounded-full inline-block border border-gray-200 shadow-sm">capture.app/dashboard</div>
              </div>
            </div>
            
            {/* Image */}
            <img 
              src="https://picsum.photos/1600/1000" 
              alt="Capture Dashboard" 
              className="w-full h-auto block"
            />

            {/* Floating UI Badges */}
            <div className="absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden lg:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
                    <div>
                        <p className="text-xs text-gray-500 font-bold">New Booking</p>
                        <p className="text-sm font-bold text-albatross-black">Society Golf Day £2,400</p>
                    </div>
                </div>
            </div>
            
            <div className="absolute -left-8 bottom-1/3 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden lg:block animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">@</div>
                    <div>
                        <p className="text-xs text-gray-500 font-bold">Email Opened</p>
                        <p className="text-sm font-bold text-albatross-black">Member Newsletter</p>
                    </div>
                </div>
            </div>
          </div>
          
          {/* Shadow glow under image */}
          <div className="absolute -inset-4 bg-albatross-green/20 blur-3xl -z-10 rounded-[3rem]"></div>
        </FadeIn>

      </div>
    </div>
  );
};