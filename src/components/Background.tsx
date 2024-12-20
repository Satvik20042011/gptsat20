import React from 'react';

export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-blue-50/80 dark:from-green-900/20 dark:to-blue-900/20" />
      <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CakVUfHQb8L_6f-a4amXsfI25cA28zYRWg&s')] opacity-[0.03] dark:opacity-[0.02] bg-repeat" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
    </div>
  );
}


