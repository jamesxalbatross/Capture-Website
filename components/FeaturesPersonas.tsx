import React from 'react';
import { Section } from './ui/Section';
import { Check, User, Trophy, BarChart3 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const FeaturesPersonas = () => {
  const features = [
    "CRM Database",
    "SMS Marketing",
    "Visual Pipelines",
    "Call Tracking",
    "Lead Management",
    "Live Dashboards",
    "Sales Automation",
    "Booking Forms",
    "Email Marketing",
    "UK Support"
  ];

  const personas = [
    { icon: User, title: "General Managers", text: "Total visibility over commercial activity and ROI in one dashboard.", color: "bg-blue-100 text-blue-600" },
    { icon: Trophy, title: "Sales Teams", text: "Stop living in spreadsheets. Manage pipelines and close deals faster.", color: "bg-albatross-yellow/30 text-yellow-700" },
    { icon: BarChart3, title: "Marketing & Admin", text: "Manage member data, send newsletters, and track campaigns easily.", color: "bg-albatross-pink/30 text-pink-700" },
  ];

  return (
    <>
      <Section background="white" className="border-t border-gray-100 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="left">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-albatross-black mb-6 tracking-tight">
                All Features Included. <br/> <span className="text-gray-300">No Hidden Costs.</span>
              </h2>
              <p className="text-xl text-gray-500 mb-10 font-medium">
                The Capture platform includes every tool you need to manage your sales, marketing, and customer communication.
              </p>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 group-hover:bg-albatross-green group-hover:scale-110 transition-all">
                      <Check className="w-3.5 h-3.5 text-albatross-green group-hover:text-white transition-colors" strokeWidth={3} />
                    </div>
                    <span className="text-albatross-black font-bold text-lg group-hover:translate-x-1 transition-transform">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={200}>
            <div className="hidden lg:block relative group">
               <div className="absolute top-10 -right-10 w-72 h-72 bg-albatross-green/10 rounded-full blur-3xl animate-blob"></div>
               <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-albatross-pink/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
               <img 
                src="https://picsum.photos/600/600" 
                alt="Features Context" 
                className="relative rounded-[2rem] shadow-2xl border-4 border-white z-10 transform rotate-2 group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-700 ease-out" 
               />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section background="light">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-albatross-black mb-16 tracking-tight">
            Built for Every Department
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((p, idx) => (
            <FadeIn key={idx} delay={idx * 150} direction="up">
              <div className="bg-white p-8 rounded-[2rem] text-center hover:-translate-y-4 hover:shadow-2xl hover:shadow-albatross-green/5 transition-all duration-300 shadow-sm border border-gray-100 group cursor-default">
                <div className={`w-20 h-20 mx-auto ${p.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <p.icon className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-albatross-black mb-4 group-hover:text-albatross-green transition-colors">{p.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
};