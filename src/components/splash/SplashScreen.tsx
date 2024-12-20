import React, { useState, useEffect } from 'react';
import { Stars } from './Stars';
import { Birds } from './Birds';
import { Title } from './Title';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-black
        flex items-center justify-center transition-opacity duration-1000
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <Stars />
      <Birds />
      <Title />
    </div>
  );
}