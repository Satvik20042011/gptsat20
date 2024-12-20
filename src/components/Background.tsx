import React, { useState } from 'react';

export function Background() {
  const [backgroundUrl, setBackgroundUrl] = useState(
    "https://images.unsplash.com/photo-1729517426822-3cfd61198a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGQlMjBuYXR1cmUlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
  );

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-blue-50/80 dark:from-green-900/20 dark:to-blue-900/20" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] bg-repeat"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      />
      <div className="absolute inset-0 backdrop-blur-3xl" />
    </div>
  );
}
