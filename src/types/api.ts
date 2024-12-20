export interface ApiConfig {
  url: string;
  key: string;
  model: string;
}

export type ModelProvider = 'mistral' | 'gemini' | 'llama' | 'chatgpt' | 'groq' | 'xai';

export interface ApiResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}