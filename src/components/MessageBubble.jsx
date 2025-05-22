import React from 'react';

const MessageBubble = ({ message, isUser }) => {
  return (
    <div className={`flex mb-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-1.5 flex-shrink-0 self-end mb-0.5">
          G
        </div>
      )}
      <div
        className={`rounded-2xl px-3 py-1.5 max-w-[200px] ${
          isUser 
            ? 'bg-blue-500 text-white rounded-tr-none' 
            : 'bg-gray-700 text-white rounded-tl-none'
        }`}
      >
        <p className="leading-tight whitespace-pre-wrap text-xs">{message}</p>
      </div>
      
      {isUser && (
        <div className="ml-1 self-end text-xs text-blue-400 mb-1 font-medium hidden">
          Read
        </div>
      )}
    </div>
  );
};

export default MessageBubble; 