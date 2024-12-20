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

    // Use function form of setMessages to always access the latest state
    setMessages(prevMessages => {
      const previousMessages = prevMessages.slice(0, -1);  // Remove the last assistant message

      try {
        const response = sendMessage(previousMessages, selectedModel);

        const newAssistantMessage: Message = {
          id: Date.now().toString(),
          content: response,
          role: 'assistant',
          timestamp: new Date(),
        };

        // Return the new message list, appending the regenerated assistant message
        return [...previousMessages, newAssistantMessage];
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to regenerate response');
        return prevMessages;  // Return previous messages if error occurs
      } finally {
        setIsLoading(false);
      }
    });
  }, [selectedModel]);

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
