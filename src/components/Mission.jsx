import React from 'react';

const Mission = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
            We're cutting through the fitness industry BS. No complicated apps. No social media distractions. No endless scrolling through workouts.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="100">
            <p className="text-2xl md:text-3xl font-medium text-blue-600 italic">
              "Just text. Get results."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission; 