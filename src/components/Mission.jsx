import React from 'react';

const Mission = () => {
  return (
    <section id="mission" className="py-20 md:py-28 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
            Make fitness simple, personal, and clear.
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-16">
            Built for simplicity. Designed for results. We believe everyone deserves to understand fitness 
            without feeling overwhelmed or confused.
          </p>
          
          <div className="grid md:grid-cols-2 gap-16 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why we built GymBro</h3>
              <p className="text-gray-600 leading-relaxed">
                We were tired of complicated fitness apps and unclear workout advice. So we built a 
                text-based coach that cuts through the noise and explains fitness in a way that's 
                personalized to you.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Who we're building for</h3>
              <p className="text-gray-600 leading-relaxed">
                For people who want to get fit but don't have time to navigate complex apps or watch 
                hour-long tutorial videos. For those who want to understand not just what exercise to do, 
                but why it matters for their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission; 