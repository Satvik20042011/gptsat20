import React from 'react';
import { ModelProvider } from '../types/api';
import { Bot, Star, Sun, Flame, Music, Code } from 'lucide-react';

interface ModelSelectorProps {
  selectedModel: ModelProvider;
  onModelChange: (model: ModelProvider) => void;
}

const models: { id: ModelProvider; name: string; icon: React.ElementType }[] = [
  { id: 'mistral', name: 'Mistral AI', icon: Star },
  { id: 'gemini', name: 'Gemini', icon: Sun },
  { id: 'llama', name: 'Llama', icon: Flame },
  { id: 'chatgpt', name: 'ChatGPT', icon: Bot },
  { id: 'groq', name: 'Groq', icon: Code },
  { id: 'xai', name: 'xAI', icon: Music },
];

export function ModelSelector({ selectedModel, onModelChange }: ModelSelectorProps) {
  const SelectedIcon = models.find((model) => model.id === selectedModel)?.icon || Bot;

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
      <div className="absolute left-3 top-2.5">
        <SelectedIcon className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
}
