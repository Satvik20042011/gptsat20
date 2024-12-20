import React, { useState, useCallback } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { ModelSelector } from './components/ModelSelector';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/splash/SplashScreen';
import { ThemeToggle } from './components/ThemeToggle';
import { ChatHistory } from './components/ChatHistory';
import { Background } from './components/Background';
import { useChat } from './hooks/useChat';
import { MessageSquare, AlertCircle, RefreshCw } from 'lucide-react';
import './styles/animations.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { 
    messages, 
    isLoading, 
    error, 
    selectedModel, 
    setSelectedModel, 
    addMessage,
    regenerateResponse,
    clearHistory
  } = useChat();

  const [buttonActive, setButtonActive] = useState(false);  // Manage button active state

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  // Debounced or delayed click handling for the regenerate button
  const handleRegenerate = useCallback(() => {
    if (messages.length > 0 && !isLoading) {
      setButtonActive(true);  // Indicate button is in an active state

      // Use a timeout to simulate a slight delay or handle any async logic
      setTimeout(() => {
        regenerateResponse(messages[messages.length - 1].id);  // Trigger regeneration
        setButtonActive(false);  // Reset active state
      }, 200);  // Slight delay for visual feedback, adjust as needed
    }
  }, [messages, regenerateResponse, isLoading]);

  return (
    <div className="min-h-screen bg-transparent dark:bg-gray-900 transition-colors duration-200">
      <Background />
      <ThemeToggle />
      <ModelSelector selectedModel={selectedModel} onModelChange={setSelectedModel} />
      <ChatHistory messages={messages} onClear={clearHistory} />
      
      <div className="relative">
        {messages.length === 0 ? (
          <div className="h-screen flex flex-col items-center justify-center px-4">
            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <MessageSquare className="w-8 h-8 text-gray-600 dark:text-gray-300" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-4 dark:text-white">
              How can I help you today?
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
              Ask me anything! I'm here to help with questions, writing, analysis, and more.
            </p>
          </div>
        ) : (
          <div className="pb-40">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="max-w-3xl mx-auto px-4 py-4 text-gray-500 dark:text-gray-400">
                Thinking...
              </div>
            )}
            {error && (
              <div className="max-w-3xl mx-auto px-4 py-4 text-red-500 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}
            {messages.length > 1 && !isLoading && (
              <div className="max-w-3xl mx-auto px-4 py-4">
                <button
                  onClick={handleRegenerate}  // Trigger regenerate logic
                  disabled={buttonActive || isLoading}  // Disable button during regen process
                  className={`flex items-center gap-2 px-4 py-2 text-sm ${buttonActive ? 'text-gray-400' : 'text-gray-600'} 
                    dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 
                    rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                    ${buttonActive ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <RefreshCw className="w-4 h-4" />
                  {buttonActive ? 'Regenerating...' : 'Regenerate response'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <ChatInput onSend={addMessage} disabled={isLoading} />
      <Footer />
    </div>
  );
}

export default App;
