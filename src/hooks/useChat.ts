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

  // Add a new user message and process it
  const addMessage = useCallback(async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    // Immediately add the user message
    setMessages((prev) => [...prev, userMessage]);
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

      // Add the assistant response to the conversation
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get response');
    } finally {
      setIsLoading(false);
    }
  }, [messages, selectedModel]);

  // Regenerate the last assistant response
  const regenerateResponse = useCallback(async () => {
    if (messages.length === 0) return; // Ensure there are messages to regenerate

    setIsLoading(true);
    setError(null);

    // Exclude the last assistant message (if any) for regeneration
    const previousMessages =
      messages[messages.length - 1]?.role === 'assistant'
        ? messages.slice(0, -1)
        : [...messages];

    try {
      const response = await sendMessage(previousMessages, selectedModel);

      const newAssistantMessage: Message = {
        id: Date.now().toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };

      // Add the regenerated assistant response
      setMessages([...previousMessages, newAssistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to regenerate response');
    } finally {
      setIsLoading(false);
    }
  }, [messages, selectedModel]);

  // Clear the conversation history
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
