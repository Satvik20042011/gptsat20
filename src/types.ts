export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatStore {
  messages: Message[];
  addMessage: (content: string, role: Message['role']) => void;
}