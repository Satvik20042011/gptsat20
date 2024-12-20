import React from 'react';
import { Message } from '../types';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === 'assistant';
  
  return (
    <div className={`py-8 ${isBot ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto flex gap-6 px-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isBot ? 'bg-green-500' : 'bg-blue-500'
        }`}>
          {isBot ? (
            <Bot className="w-5 h-5 text-white" />
          ) : (
            <User className="w-5 h-5 text-white" />
          )}
        </div>
        <div className="flex-1 space-y-2">
          <p className="font-medium">{isBot ? 'Assistant' : 'You'}</p>
          <p className="text-gray-700 leading-relaxed">{message.content}</p>
        </div>
      </div>
    </div>
  );
}