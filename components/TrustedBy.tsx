import React from 'react';

export const TrustedBy = () => {
  const clients = ["The Royal Club", "Links Valley", "Pine Ridge Resort", "Fairway Estates", "Ocean View Golf"];

  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
          Trusted by leading clubs across the UK & Ireland
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {clients.map((client, i) => (
                <div key={i} className="text-xl font-extrabold text-albatross-green flex items-center gap-2 group cursor-default tracking-tight">
                    <div className="w-8 h-8 bg-albatross-green rounded-lg opacity-40 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-gray-400 group-hover:text-albatross-black transition-colors">{client}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};