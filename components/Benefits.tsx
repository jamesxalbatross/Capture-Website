import React from 'react';
import { Section } from './ui/Section';
import { Eye, Settings, Trello, Target, Mail, Flag } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const benefits = [
  { icon: Eye, title: "Total Visibility", text: "Stop guessing. Our central CRM gives you a 360-degree view of every customer and lead.", color: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white" },
  { icon: Settings, title: "Automate Follow-up", text: "Never miss a lead. Use automated email & SMS sequences to instantly respond to new enquiries.", color: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white" },
  { icon: Trello, title: "Visual Pipeline", text: "Move leads from 'New' to 'Booked' with a simple drag-and-drop visual pipeline.", color: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white" },
  { icon: Target, title: "Data-Driven", text: "Track conversion rates, lead sources, and team performance in real-time.", color: "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white" },
  { icon: Mail, title: "Email Marketing", text: "Engage your members with beautiful, professional email campaigns and newsletters.", color: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white" },
  { icon: Flag, title: "UK Support", text: "Get expert, UK-based support from people who understand the golf industry.", color: "bg-yellow-50 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white" },
];

export const Benefits = () => {
  return (
    <Section id="features" background="white" className="py-24">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-extrabold text-albatross-black mb-6 tracking-tight">
            Everything You Need to <span className="relative z-10 inline-block">Grow <span className="absolute bottom-1 left-0 w-full h-3 bg-albatross-yellow -z-10 rounded-sm"></span></span>
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Powerful features wrapped in a simple, beautiful interface.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, idx) => (
          <FadeIn key={idx} delay={idx * 100} className="h-full">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300 group h-full cursor-pointer">
              <div className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-albatross-black mb-3 group-hover:text-albatross-green transition-colors">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {benefit.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};