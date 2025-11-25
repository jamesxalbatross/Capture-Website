import React from 'react';
import { Section } from './ui/Section';
import { X, Check } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const ProblemSolution = () => {
  const problems = [
    "Enquiries lost in personal inboxes",
    "Slow, manual follow-ups",
    "Data scattered across spreadsheets",
    "Zero visibility on sales pipeline",
    "Generic member emails"
  ];

  const solutions = [
    "One central hub for all leads",
    "Automated responses & tasks",
    "Visual drag-and-drop pipeline",
    "Real-time ROI dashboards",
    "Segmented marketing suite"
  ];

  return (
    <Section id="problem" background="white" className="py-24 md:py-32">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-extrabold text-albatross-black mb-6 tracking-tight">
            Stop the Chaos. <span className="text-albatross-green underline decoration-albatross-yellow decoration-4 underline-offset-4">Get Control.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-xl text-gray-500 font-medium">
            Your current process might be costing you revenue every day. See the difference a true command centre makes.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-4">
        {/* The Chaos */}
        <FadeIn delay={200} direction="left">
          <div className="bg-red-50/50 p-10 md:p-14 rounded-[2.5rem] border border-red-100 relative group transition-all duration-300 hover:shadow-2xl hover:shadow-red-100/50 hover:-translate-y-2 hover:bg-red-50">
              <h3 className="text-2xl font-extrabold text-red-900 mb-8 flex items-center gap-3 tracking-tight">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                      <X className="w-6 h-6" strokeWidth={3} />
                  </div>
                  The Chaos
              </h3>
              <ul className="space-y-6">
                  {problems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-gray-700 font-bold text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                          <X className="w-5 h-5 text-red-400 shrink-0" />
                          <span>{item}</span>
                      </li>
                  ))}
              </ul>
          </div>
        </FadeIn>

        {/* The Command Centre */}
        <FadeIn delay={400} direction="right">
          <div className="bg-white p-10 md:p-14 rounded-[2.5rem] border-2 border-albatross-green/20 shadow-xl shadow-albatross-green/5 relative transform transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-albatross-green/20 hover:border-albatross-green/40">
              <div className="absolute top-0 right-0 bg-albatross-green text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
                  RECOMMENDED
              </div>
              <h3 className="text-2xl font-extrabold text-albatross-black mb-8 flex items-center gap-3 tracking-tight">
                  <div className="w-12 h-12 rounded-full bg-albatross-green flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-6 h-6" strokeWidth={3} />
                  </div>
                  Capture Command Centre
              </h3>
              <ul className="space-y-6">
                  {solutions.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-albatross-black font-bold text-lg group">
                          <div className="w-6 h-6 rounded-full bg-albatross-green/20 flex items-center justify-center shrink-0 group-hover:bg-albatross-green transition-colors">
                              <Check className="w-3.5 h-3.5 text-albatross-green group-hover:text-white transition-colors" strokeWidth={4} />
                          </div>
                          <span>{item}</span>
                      </li>
                  ))}
              </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};