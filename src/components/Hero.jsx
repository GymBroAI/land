import React from 'react';
import ChatPreview from './ChatPreview';

const Hero = () => {
  return (
    <section id="demo" className="py-16 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0" data-aos="fade-right" data-aos-delay="100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight">
              Your AI Gym Bro.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                In Your Pocket.
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg">
              Just text. Get workouts, form checks, and motivation on demand. No apps, no BS.
            </p>
            <a 
              href="#waitlist" 
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Join the Waitlist
            </a>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-center items-center" data-aos="fade-up" data-aos-delay="300">
            <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
              {/* Phone glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-[45px] blur opacity-70"></div>
              {/* Subtle shadow on the floor */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-black/10 rounded-full blur-md z-0"></div>
              {/* Phone container */}
              <div className="relative z-10">
                <ChatPreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 