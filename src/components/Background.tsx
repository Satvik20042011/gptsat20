import React from "react";

export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-50 dark:opacity-40" />

      {/* Subtle Overlay with Shapes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(0,0,0,0.1))] opacity-20" />

      {/* Particle Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circles.png')] opacity-10 dark:opacity-5 bg-repeat" />

      {/* Blurred Effect */}
      <div className="absolute inset-0 backdrop-blur-xl" />

      {/* Faint Glowing Animation */}
      <div className="absolute inset-0 animate-[pulse_10s_infinite] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent)]" />
    </div>
  );
}
