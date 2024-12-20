import React from 'react';

export function Birds() {
  return (
    <div className="birds absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="bird absolute"
          style={{
            top: `${20 + Math.random() * 40}%`,
            left: `-${20 + i * 10}%`,
            animation: `fly-across ${15 + Math.random() * 10}s linear infinite ${i * 2}s`
          }}
        >
          <div className="relative w-4 h-4">
            <span className="absolute w-full h-0.5 bg-white transform rotate-45" />
            <span className="absolute w-full h-0.5 bg-white transform -rotate-45" />
          </div>
        </div>
      ))}
    </div>
  );
}