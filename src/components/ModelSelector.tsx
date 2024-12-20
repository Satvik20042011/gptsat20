import React from 'react';
import { ModelProvider } from '../types/api';
import { Bot } from 'lucide-react';

interface ModelSelectorProps {
  selectedModel: ModelProvider;
  onModelChange: (model: ModelProvider) => void;
}

const models: { id: ModelProvider; name: string }[] = [
  { id: 'mistral', name: 'Mistral AI' },
  { id: 'gemini', name: 'Gemini' },
  { id: 'llama', name: 'Llama' },
  { id: 'chatgpt', name: 'ChatGPT' },
  { id: 'groq', name: 'Groq' },
  { id: 'xai', name: 'xAI' },
];

export function ModelSelector({ selectedModel, onModelChange }: ModelSelectorProps) {
  return (
    <div className="fixed top-4 right-4 z-10">
      <select
        value={selectedModel}
        onChange={(e) => onModelChange(e.target.value as ModelProvider)}
        className="pl-10 pr-4 py-2 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
      <Bot className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
    </div>
  );
}