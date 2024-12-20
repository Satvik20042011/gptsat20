import { ApiConfig } from '../types/api';

export const mistralConfig: ApiConfig = {
  url: 'https://api.mistral.ai/v1/chat/completions',
  key: '1uhB5Phsr3TTxFTCuSMxgqCtFyLX16PT',
  model: 'mistral-large-latest',
};

export const geminiConfig: ApiConfig = {
  url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
  key: 'AIzaSyBkLB-5I1vNoq5uA1Op4r_XsI6_ESJFHjM',
  model: 'gemini-1.5-pro',
};

export const llamaConfig: ApiConfig = {
  url: 'https://api.groq.com/openai/v1/chat/completions',
  key: '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',
  model: 'llama-3.1-70b-versatile',
};

export const chatGptConfig: ApiConfig = {
  url: 'https://api-inference.huggingface.co/models/vicgalle/gpt2-alpaca-gpt4',
  key: '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',
  model: 'gpt2-alpaca-gpt4',
};

export const groqConfig: ApiConfig = {
  url: 'https://api.groq.com/openai/v1/chat/completions',
  key: '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',
  model: 'llama-3.3-70b-versatile',
};

export const xaiConfig: ApiConfig = {
  url: 'https://api.x.ai/v1/chat/completions',
  key: 'xai-FNKtpUJczww7khP4UEklfKElDtaCUzDjayZY8CW9YJKHayF1hlNUh8fOKwIEk5JuOANi3eTxFipBdvEf',
  model: 'grok-2-vision-1212',
};