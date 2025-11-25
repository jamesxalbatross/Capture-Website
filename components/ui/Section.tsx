import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'green' | 'pink';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  background = 'white' 
}) => {
  const backgrounds = {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-albatross-black text-white",
    green: "bg-albatross-green text-white",
    pink: "bg-albatross-pink/20",
  };

  // scroll-mt-32 adds a top margin when scrolling to this ID, preventing the fixed navbar from obscuring content
  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-32 ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
};