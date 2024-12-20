import React from 'react';

export function Stars() {
  return (
    <div className="stars absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${1 + Math.random() * 3}s infinite ${Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
}