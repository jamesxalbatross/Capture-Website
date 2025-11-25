import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: "How long does this take to set up?", a: "We can have your Capture command centre up and running in as little as 48 hours. Our UK-based team handles all the technical setup for you." },
  { q: "Does this integrate with our current tee sheet?", a: "Capture is designed to work seamlessly alongside all major tee sheet and club management systems. It acts as your central 'sales & marketing' layer, ensuring all enquiries are captured, no matter where they come from." },
  { q: "My team is not 'tech-savvy'. Is it hard to use?", a: "Capture was designed for simplicity. If your team can use email, they will find Capture intuitive. We also provide full training for your entire team." },
  { q: "Is this only for large clubs and resorts?", a: "Not at all. We have packages that scale for every type of club, from 9-hole private clubs to large multi-course resorts." },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section background="white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-albatross-black mb-12 tracking-tight">
          Questions?
        </h2>
        
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl transition-colors hover:bg-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-bold text-albatross-black">{item.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-albatross-green" />
                </div>
              </button>
              
              <div 
                className={`px-6 md:px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-48 opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'
                }`}
              >
                <p className="text-gray-600 font-medium leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};