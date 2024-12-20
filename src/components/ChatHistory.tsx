import React from 'react';
import { History, Trash2 } from 'lucide-react';
import { Message } from '../types';

interface ChatHistoryProps {
  messages: Message[];
  onClear: () => void;
}

export function ChatHistory({ messages, onClear }: ChatHistoryProps) {
  const chatSessions = messages.reduce((sessions, message) => {
    if (message.role === 'user') {
      sessions.push(message.content);
    }
    return sessions;
  }, [] as string[]);

  return (
    <div className="fixed left-4 top-20 z-10 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <History className="w-5 h-5" />
          Chat History
        </h2>
        {messages.length > 1 && (
          <button
            onClick={onClear}
            className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
            title="Clear history"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {chatSessions.map((content, index) => (
          <div
            key={index}
            className="p-2 text-sm bg-gray-50 dark:bg-gray-700/50 rounded truncate"
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}