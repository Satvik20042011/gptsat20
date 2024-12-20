import React from 'react';

export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-300/80 to-emerald-200/80 dark:from-lime-800/20 dark:to-emerald-900/20" />
      {/* Greenery Image Overlay */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532534281-fcdd4698a012')] opacity-[0.1] dark:opacity-[0.08] bg-repeat"
        style={{ animation: 'slowMove 30s linear infinite' }}
      />
      {/* Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-3xl" />
    </div>
  );
}
