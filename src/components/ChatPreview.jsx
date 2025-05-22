import React, { useState, useEffect } from 'react';
import MessageBubble from './MessageBubble';

const ChatPreview = () => {
  const allMessages = [
    { id: 1, text: "Yo GymBro, got like 45 mins. Chest day. What should I hit?", isUser: true },
    { id: 2, text: "Say less. Quick chest burner coming up 🫡", isUser: false },
    { 
      id: 3, 
      text: 
        "🔥 Chest Day Quickie 🔥\n" +
        "• Bench Press 4x8\n" +
        "• Incline DB Press 3x10\n" +
        "• Superset: Cable Flys + Push-ups 3x12\n" +
        "• Optional burnout: Dips til failure\n\n" +
        "Rest 60s. Lock in. Let's grow 💪", 
      isUser: false 
    },
    { id: 4, text: "Brooo pushups after flys gonna hurt 😭", isUser: true },
    { id: 5, text: "That's the point. Chase the pump 😤", isUser: false },
    { id: 6, text: "Bet, heading to the gym now", isUser: true },
    { id: 7, text: "Respect. Text me 'done' after — I better see some chest veins 🫡", isUser: false }
  ];
  
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstRun, setIsFirstRun] = useState(true);
  
  useEffect(() => {
    if (currentIndex < allMessages.length) {
      // Add delay before processing each message (even user messages)
      setTimeout(() => {
        // For user messages, add them immediately
        if (allMessages[currentIndex].isUser) {
          setVisibleMessages(prev => [...prev, allMessages[currentIndex]]);
          setCurrentIndex(currentIndex + 1);
        } else {
          // For GymBro messages, show typing indicator first
          setIsTyping(true);
          // Longer typing delay for GymBro messages
          const typingDelay = allMessages[currentIndex].text.length > 50 ? 3000 : 1800;
          
          setTimeout(() => {
            setIsTyping(false);
            setVisibleMessages(prev => [...prev, allMessages[currentIndex]]);
            setCurrentIndex(currentIndex + 1);
          }, typingDelay);
        }
      }, 1200); // Add delay between messages
    }
  }, [currentIndex]);
  
  // Start animation cycle
  useEffect(() => {
    // Mark first run as completed after initial render
    if (isFirstRun) {
      setIsFirstRun(false);
    }
    
    // Initial delay before starting
    const initialDelay = setTimeout(() => {
      if (allMessages.length > 0 && visibleMessages.length === 0) {
        setVisibleMessages([allMessages[0]]);
        setCurrentIndex(1);
      }
    }, 1500);
    
    // Reset and restart animation after all messages are shown
    if (visibleMessages.length === allMessages.length) {
      const resetTimer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentIndex(0);
      }, 8000); // Longer pause before restarting
      
      return () => clearTimeout(resetTimer);
    }
    
    return () => clearTimeout(initialDelay);
  }, [visibleMessages.length, isFirstRun]);
  
  const currentTime = "5:01 PM";

  return (
    <div className="w-[280px] mx-auto bg-black rounded-[40px] p-2 shadow-2xl border-[6px] border-black h-[580px] overflow-hidden scale-110 transform flex flex-col">
      {/* Phone screen */}
      <div className="bg-black rounded-[32px] h-full w-full overflow-hidden relative flex flex-col">
        {/* Status bar */}
        <div className="flex justify-between items-center px-4 py-1 bg-black text-white w-full">
          <div className="text-[10px] font-medium">{currentTime}</div>
          <div className="flex items-center space-x-1">
            <div className="h-2 w-2">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.33 4.67c.98 0 1.67.78 1.67 1.76v8.54H14c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5v-8.53c0-.98.7-1.77 1.67-1.77h1.66z" />
              </svg>
            </div>
            <div className="h-2 w-3">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
              </svg>
            </div>
            <div className="h-2 w-4">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V20h10V5.33z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Chat header - simplified to match reference image */}
        <div className="flex items-center px-2 py-1 bg-black text-white w-full">
          <div className="flex items-center text-blue-400 mr-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-[10px] ml-0.5">34</span>
          </div>
          
          <div className="flex flex-col items-center mx-auto">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
              G
            </div>
            <div className="mt-0.5 text-[10px] font-medium flex items-center">
              GymBro 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="text-blue-400 ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Time label */}
        <div className="text-center my-2 w-full">
          <span className="text-[9px] text-gray-500">Today {currentTime}</span>
        </div>

        {/* Chat messages - fixed dimensions container to prevent layout shift */}
        <div className="overflow-y-auto px-2 pb-1 flex-1 min-h-[380px] w-full">
          {/* Empty state placeholder to maintain dimensions when no messages */}
          {visibleMessages.length === 0 && !isTyping && (
            <div className="opacity-0 h-[200px] w-full">
              {/* Hidden placeholder to maintain size */}
              <div className="w-full max-w-[200px]"></div>
            </div>
          )}
          
          {visibleMessages.map((message) => (
            <MessageBubble key={message.id} message={message.text} isUser={message.isUser} />
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex mb-2 justify-start">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-1.5 flex-shrink-0 self-end mb-0.5">
                G
              </div>
              <div className="rounded-2xl px-3 py-2.5 bg-gray-700 text-white rounded-tl-none">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-0"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Message input */}
        <div className="bg-black text-white border-t border-gray-800 p-1 mt-auto w-full">
          <div className="flex items-center justify-between">
            <button className="bg-gray-800 w-6 h-6 rounded-full flex items-center justify-center text-sm">
              +
            </button>
            
            <div className="flex-1 mx-1.5 bg-gray-800 rounded-full px-3 py-1">
              <input
                type="text"
                placeholder="iMessage"
                className="bg-transparent outline-none text-[10px] w-full"
                disabled
              />
            </div>
            
            <button className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="w-1/4 h-1 bg-gray-400 rounded-full mx-auto mt-1"></div>
    </div>
  );
};

export default ChatPreview; 