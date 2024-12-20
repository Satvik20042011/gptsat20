import React, { useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pb-8 pt-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="relative flex items-end border rounded-lg bg-white shadow-lg">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message..."
            disabled={disabled}
            className="flex-1 max-h-[200px] min-h-[56px] w-full resize-none border-0 bg-transparent py-4 pl-4 pr-12 text-base focus:ring-0 focus:outline-none disabled:opacity-50"
            style={{ height: '56px' }}
          />
          <button
            onClick={handleSend}
            disabled={disabled || !input.trim()}
            className="absolute right-2 bottom-3 p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-500"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
          AI responses may vary in accuracy. Please verify important information.
        </p>
      </div>
    </div>
  );
}