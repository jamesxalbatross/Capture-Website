import React from 'react';
import { Section } from './ui/Section';
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <Section id="testimonials" background="light" className="relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex justify-center gap-1 mb-4">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-albatross-yellow text-albatross-yellow" />)}
        </div>
        <h2 className="text-4xl font-extrabold text-albatross-black mb-4 tracking-tight">
          Trusted by Top Clubs
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow relative border border-gray-100/50">
            <Quote className="absolute top-10 right-10 w-12 h-12 text-albatross-green/10" />
            <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8 relative z-10">
                "Capture streamlined our entire enquiry process. We've seen a <strong className="text-albatross-green bg-green-50 px-1 rounded">30% increase</strong> in society bookings because no lead ever gets lost. It paid for itself in two months."
            </p>
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md">
                    <img src="https://picsum.photos/100/100?random=1" alt="GM" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="font-bold text-albatross-black text-lg">General Manager</p>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Links Valley Golf Club</p>
                </div>
            </div>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow relative border border-gray-100/50">
            <Quote className="absolute top-10 right-10 w-12 h-12 text-albatross-green/10" />
            <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8 relative z-10">
                "Before Capture, our sales process was a mess. Now, I have a complete view of my team's pipeline, and <strong className="text-albatross-green bg-green-50 px-1 rounded">our follow-up time has been cut in half</strong>. It's a game-changer."
            </p>
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md">
                    <img src="https://picsum.photos/100/100?random=2" alt="Sales Manager" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="font-bold text-albatross-black text-lg">Sales Manager</p>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">Pine Ridge Golf Resort</p>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};