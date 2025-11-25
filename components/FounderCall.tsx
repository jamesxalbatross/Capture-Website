import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';

export const FounderCall = () => {
  return (
    <Section id="demo-form" background="white" className="pt-20 pb-32">
      <FadeIn delay={0}>
        <div className="bg-gradient-to-br from-[#FFF0F5] to-[#FFE4E1] rounded-[3rem] p-8 md:p-16 overflow-hidden relative group border border-albatross-pink/20 shadow-card">
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-albatross-pink/30 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              {/* CTA Column */}
              <div className="text-albatross-black">
                  <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                      Stop Chasing. <br/><span className="text-albatross-green">Start Converting.</span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 font-medium">
                      See exactly how Capture can transform your club's revenue. Get a personalised, 15-minute demo.
                  </p>
                  
                  <div className="bg-white p-8 rounded-3xl border border-albatross-pink/20 shadow-xl shadow-albatross-pink/10">
                      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                          <div>
                              <label className="block text-sm font-bold text-albatross-black mb-2 ml-1">WORK EMAIL</label>
                              <input 
                                  type="email" 
                                  placeholder="name@golfclub.com" 
                                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-albatross-black placeholder-gray-400 focus:ring-2 focus:ring-albatross-green focus:bg-white transition-all outline-none" 
                              />
                          </div>
                          <Button fullWidth size="lg" variant="primary" className="shadow-lg shadow-albatross-green/20">Book Your Free Demo</Button>
                          <p className="text-center text-sm text-gray-500 mt-4 font-medium">No risk. No obligation.</p>
                      </form>
                  </div>
              </div>

              {/* Founder Column */}
              <div className="bg-white rounded-[2.5rem] p-10 md:p-12 text-center relative shadow-xl shadow-albatross-pink/10 rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out transform hover:scale-[1.02] border border-white">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-albatross-pink/20 shadow-md mb-6 hover:scale-105 transition-transform">
                      <img src="https://picsum.photos/300/300?grayscale" alt="James Wilkinson" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-albatross-black mb-4">A Note from the Founder</h3>
                  <blockquote className="text-lg text-gray-600 italic mb-6 leading-relaxed">
                      "I won't give you a high-pressure sales pitch. I'll simply listen to your challenges and show you exactly how Capture can solve them. I understand the unique problems you face every day."
                  </blockquote>
                  <p className="font-bold text-albatross-black text-lg">James Wilkinson</p>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Founder, Albatross</p>
              </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};