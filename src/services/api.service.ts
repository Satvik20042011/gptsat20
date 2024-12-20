import { Message } from '../types';
import { ModelProvider } from '../types/api';
import { mistralConfig, geminiConfig, llamaConfig, chatGptConfig, groqConfig, xaiConfig } from '../config/api.config';
import { formatMessages } from '../utils/message.utils';
import { handleApiResponse } from '../utils/response.utils';
import { ApiError } from '../types/api';

export async function sendMessage(messages: Message[], provider: ModelProvider): Promise<string> {
  try {
    const config = {
      mistral: mistralConfig,
      gemini: geminiConfig,
      llama: llamaConfig,
      chatgpt: chatGptConfig,
      groq: groqConfig,
      xai: xaiConfig,
    }[provider];

    if (!config) {
      throw new ApiError('Unsupported provider', 400);
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (provider === 'gemini') {
      const response = await fetch(`${config.url}?key=${config.key}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(formatMessages(messages, provider)),
      });
      return handleApiResponse(response, provider);
    }

    headers.Authorization = `Bearer ${config.key}`;
    const response = await fetch(config.url, {
      method: 'POST',
      headers,
      body: JSON.stringify(formatMessages(messages, provider)),
    });

    return handleApiResponse(response, provider);
  } catch (error) {
    console.error('API Error:', error);
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      'Failed to communicate with the AI service',
      undefined,
      error
    );
  }
}