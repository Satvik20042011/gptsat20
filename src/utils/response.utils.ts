import { ApiResponse, GeminiResponse } from '../types/api';
import { ApiError } from '../types/api';

export async function handleApiResponse(
  response: Response,
  provider: string
): Promise<string> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new ApiError(
      errorData.message || `${provider} API request failed`,
      response.status,
      errorData
    );
  }

  const data = await response.json();

  switch (provider) {
    case 'gemini':
      return (data as GeminiResponse).candidates[0].content.parts[0].text;
    
    case 'mistral':
    case 'llama':
    case 'chatgpt':
    case 'groq':
    case 'xai':
      return (data as ApiResponse).choices[0].message.content;
    
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
}