import React from 'react';

export function Title() {
  return (
    <div className="relative z-10">
      <h1 className="text-7xl md:text-9xl font-bold text-white text-center mb-8 animate-title">
        SAT GPT
      </h1>
      <p className="text-xl md:text-2xl text-white/80 text-center animate-fade-in">
        Your AI-Powered Assistant
      </p>
    </div>
  );
}