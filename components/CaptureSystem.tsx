import React from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';

const acronym = [
  { letter: "C", word: "Central", desc: "Every enquiry from every source (web, email, social) is logged in one central hub." },
  { letter: "A", word: "Assigned", desc: "Leads are automatically assigned to the right person or department (Societies, Memberships, Events)." },
  { letter: "P", word: "Progressed", desc: "Track every deal in a simple, drag-and-drop visual sales pipeline (New, Quoted, Booked)." },
  { letter: "T", word: "Tracked", desc: "Every call, email, and note is automatically logged, creating a complete audit trail." },
  { letter: "U", word: "Understood", desc: "Real-time dashboards show you what's working, from marketing channels to conversion rates." },
  { letter: "R", word: "Responded", desc: "Respond faster with built-in email and SMS templates, or launch full marketing campaigns." },
  { letter: "E", word: "Executed", desc: "Gives your team the tools, data, and processes to execute the sale and grow revenue." },
];

export const CaptureSystem = () => {
  return (
    <Section background="light" className="relative">
      {/* Background Decor */}
      <div className="absolute -left-20 top-40 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl mix-blend-multiply animate-pulse pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-start relative z-10">
        {/* Sticky Left Column */}
        <div className="lg:w-5/12 lg:sticky lg:top-32 lg:self-start lg:h-fit">
          <FadeIn>
            <div className="inline-block px-3 py-1 bg-albatross-pink/20 text-albatross-black text-xs font-extrabold rounded-full mb-6 tracking-wide uppercase">
              Proven Methodology
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-albatross-black mb-6 leading-none tracking-tight">
              The <br/>
              <span className="text-albatross-green">CAPTURE</span> <br/>
              System.
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-medium leading-relaxed">
              Your Blueprint for Growth. Our platform is built on this proven 7-step system that gives you complete control and ensures no opportunity ever falls through the cracks.
            </p>
            <div className="w-32 h-2 bg-albatross-yellow rounded-full"></div>
          </FadeIn>
        </div>

        {/* Scrollable Right Column */}
        <div className="lg:w-7/12 grid gap-6">
            {acronym.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 50} direction="up">
                  <div className="group flex items-start p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-albatross-green/5 hover:scale-[1.01] transition-all duration-300 cursor-default">
                      <div className="mr-8 flex-shrink-0 w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-albatross-green/10 flex items-center justify-center transition-colors duration-300">
                          <span className="block text-3xl font-black text-gray-300 group-hover:text-albatross-green transition-colors duration-300">
                              {item.letter}
                          </span>
                      </div>
                      <div className="pt-2">
                          <h3 className="text-xl font-bold text-albatross-black mb-2 group-hover:text-albatross-green transition-colors duration-300">
                              {item.word}
                          </h3>
                          <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-600 transition-colors">
                              {item.desc}
                          </p>
                      </div>
                  </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </Section>
  );
};