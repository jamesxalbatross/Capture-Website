import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { ProblemSolution } from './components/ProblemSolution';
import { ProductShowcase } from './components/ProductShowcase';
import { CaptureSystem } from './components/CaptureSystem';
import { Testimonials } from './components/Testimonials';
import { Benefits } from './components/Benefits';
import { FeaturesPersonas } from './components/FeaturesPersonas';
import { FAQ } from './components/FAQ';
import { FounderCall } from './components/FounderCall';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';

function App() {
  const scrollToDemo = () => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-albatross-black selection:bg-albatross-pink selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <TrustedBy />
        <ProblemSolution />
        <ProductShowcase />
        <CaptureSystem />
        <Testimonials />
        
        {/* Banner 2 */}
        <section className="bg-albatross-green py-20 text-center relative overflow-hidden">
          {/* Subtle Pink blob for brand connection */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-albatross-pink rounded-full blur-3xl opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
              Ready to See a <span className="text-albatross-yellow relative">30% Increase</span> in Your Bookings?
            </h3>
            <p className="text-green-50 mb-10 max-w-2xl mx-auto text-lg font-medium">
              Book a no-obligation demo and we'll show you the exact process our top clients use.
            </p>
            <Button onClick={scrollToDemo} variant="white" size="lg" className="text-albatross-green">
              Book Your Free Demo
            </Button>
          </div>
        </section>

        <Benefits />
        <FeaturesPersonas />
        <FAQ />
        <FounderCall />
      </main>

      <Footer />
    </div>
  );
}

export default App;