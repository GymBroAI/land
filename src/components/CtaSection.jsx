import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CtaSection = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Google Sheet Web App URL
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyoV79cdaMB1VXpxDMZ_3-qHiPidaLVHBPFoPOSGVZSr0GIs1WoHoqc7qO46nTktYs5/exec';

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    try {
      // Construct URL with query params for the form data
      const url = new URL(GOOGLE_SHEET_URL);
      url.searchParams.append('email', data.email);
      
      // Use fetch API to send data
      const response = await fetch(url, {
        method: 'GET', // Using GET as it works better with Google Apps Script
        mode: 'no-cors', // Required for Google Apps Script
      });
      
      // Since we're using no-cors, we can't check the response status
      // So we'll just assume it's a success
      setSubmitSuccess(true);
      reset(); // Clear the form
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 md:py-32 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -right-10 -top-10 bg-white rounded-full w-40 h-40"></div>
        <div className="absolute left-1/4 bottom-10 bg-white rounded-full w-60 h-60"></div>
        <div className="absolute right-1/3 top-1/3 bg-white rounded-full w-20 h-20"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Level Up Your Fitness Journey?</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
            Join the waitlist today and be one of the first to experience GymBro - your AI fitness companion that actually keeps it real.
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`px-6 py-4 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm border border-white ${errors.email ? 'border-red-400' : 'border-opacity-30'} text-white placeholder-white placeholder-opacity-70 outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 w-full text-lg`}
                  {...register('email', { 
                    required: 'Email is required', 
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="absolute -bottom-6 left-0 text-sm text-red-300 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button 
                type="submit"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-lg text-lg transform hover:scale-105 duration-200 disabled:opacity-70 disabled:transform-none disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span> : 
                  'Join Waitlist'
                }
              </button>
            </div>
            
            {submitSuccess && (
              <div className="mt-4 py-2 px-4 bg-green-500 bg-opacity-25 rounded-md border border-green-400">
                <p className="text-white">Thank you! You've been added to our waitlist.</p>
              </div>
            )}
            
            {submitError && (
              <div className="mt-4 py-2 px-4 bg-red-500 bg-opacity-25 rounded-md border border-red-400">
                <p className="text-white">Sorry, there was an error submitting your email. Please try again.</p>
              </div>
            )}
            
            <p className="mt-6 text-sm opacity-70">
              We'll never spam. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 