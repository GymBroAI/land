import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Custom Workout Plans',
      description: 'Text GymBro your goals, available equipment, and time constraints to get a personalized workout instantly. No need to navigate complex app interfaces or watch tutorial videos.',
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Real-time Guidance',
      description: 'Stuck during a workout? Just text GymBro. Send a pic of your form or explain what you are struggling with, and get instant, clear feedback – like having a trainer in your messages.',
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'GymBro Personality Modes',
      description: 'Text should feel personal. Choose your perfect coaching style from intense motivator to chill supporter. GymBro adapts to your preferences, making fitness advice feel like texting a friend.',
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Accountability Check-ins',
      description: 'No more complicated fitness tracking apps. GymBro sends simple text check-ins at the right times to keep you consistent. Just reply to log your progress and stay on track with your fitness goals.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Features That Hit Different</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            GymBro strips away the complexity of fitness apps. Get all the benefits of a personal trainer through the simplicity of text messaging.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 