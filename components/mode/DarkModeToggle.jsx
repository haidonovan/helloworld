'use client'
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded text-black dark:text-white"
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
