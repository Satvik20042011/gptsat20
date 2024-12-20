import { Message } from '../types';
import { ModelProvider } from '../types/api';
import { mistralConfig, geminiConfig, llamaConfig, chatGptConfig, groqConfig, xaiConfig } from '../config/api.config';

export function formatMessages(messages: Message[], provider: ModelProvider) {
  switch (provider) {
    case 'mistral':
      return {
        model: mistralConfig.model,
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content,
        })),
      };
    
    case 'gemini':
      return {
        contents: messages.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }],
        })),
      };
    
    case 'llama':
    case 'groq':
      return {
        model: provider === 'llama' ? llamaConfig.model : groqConfig.model,
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content,
        })),
      };
    
    case 'chatgpt':
      return {
        model: chatGptConfig.model,
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content,
        })),
      };
    
    case 'xai':
      return {
        model: xaiConfig.model,
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content,
        })),
        stream: false,
        temperature: 0,
      };
    
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
}