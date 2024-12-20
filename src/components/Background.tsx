import React from 'react';

export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-300/80 to-lime-200/80 dark:from-green-700/30 dark:to-lime-600/30" />
      
      {/* Greenery Image Overlay */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532534281-fcdd4698a012')] opacity-[0.12] dark:opacity-[0.08] bg-repeat"
        style={{ animation: 'slowMove 30s linear infinite' }}
      />
      
      {/* Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-3xl" />
    </div>
  );
}
