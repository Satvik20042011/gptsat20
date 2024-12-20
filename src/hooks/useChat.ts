import { useState, useCallback } from 'react';
import { Message } from '../types';
import { ModelProvider } from '../types/api';
import { sendMessage } from '../services/api.service';
import { INITIAL_MESSAGE } from '../config/constants';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<ModelProvider>('mistral');

  const addMessage = useCallback(async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await sendMessage([...messages, userMessage], selectedModel);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get response');
    } finally {
      setIsLoading(false);
    }
  }, [messages, selectedModel]);

  const regenerateResponse = useCallback(async () => {
    if (messages.length < 2) return;

    setIsLoading(true);
    setError(null);

    // Slice messages to exclude the last assistant message
    const previousMessages = messages.slice(0, -1);

    try {
      // Send the previous messages to regenerate the response
      const response = await sendMessage(previousMessages, selectedModel);

      // Create a new assistant message with the regenerated response
      const newAssistantMessage: Message = {
        id: Date.now().toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };

      // Append the new assistant message to the previous messages
      setMessages(prevMessages => [...previousMessages, newAssistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to regenerate response');
    } finally {
      setIsLoading(false);
    }
  }, [messages, selectedModel]);

  const clearHistory = useCallback(() => {
    setMessages([INITIAL_MESSAGE]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    selectedModel,
    setSelectedModel,
    addMessage,
    regenerateResponse,
    clearHistory,
  };
}
