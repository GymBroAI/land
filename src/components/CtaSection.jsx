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
    <section id="waitlist" className="py-16 md:py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-24 h-24 rounded-full bg-white blur-md"></div>
        <div className="absolute bottom-1/3 right-1/5 w-32 h-32 rounded-full bg-white blur-md"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-700/40 to-indigo-700/40 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-white/10" data-aos="fade-up">
          <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="100">
            <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-medium mb-3 backdrop-blur-sm">
              Early Access
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">exclusive</span> beta waitlist
            </h2>
            <p className="mt-4 opacity-90 text-sm md:text-base">
              Get early access to personalized workouts and fitness advice from your own GymBro, before we launch to the public.
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`w-full px-4 py-3.5 rounded-lg bg-white/10 text-white text-base border ${errors.email ? 'border-red-400' : 'border-white/20'} backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-white/60`}
                  {...register('email', { 
                    required: 'Email required', 
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email'
                    }
                  })}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="absolute -bottom-6 left-1 text-xs text-red-200">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button 
                type="submit"
                className="px-8 py-3.5 bg-white text-blue-800 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-md text-base disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Secure Your Spot'}
              </button>
            </div>
            
            {submitSuccess && (
              <div className="mt-5 py-2 px-4 bg-green-500/20 border border-green-500/50 rounded-md text-sm">
                ✅ You're in! We'll notify you when we're ready for you to join.
              </div>
            )}
            
            {submitError && (
              <div className="mt-5 py-2 px-4 bg-red-500/20 border border-red-500/50 rounded-md text-sm">
                ❌ Something went wrong. Please try again.
              </div>
            )}
            
            <div className="mt-5 text-center text-xs opacity-80">
              No spam. Unsubscribe anytime.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 