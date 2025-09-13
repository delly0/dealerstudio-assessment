import '../styles/globals.css';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500">
    <button
      className="fixed top-4 right-4 px-4 py-2 rounded-full bg-blue-600 text-white dark:bg-blue-400 dark:text-black shadow-lg z-50"
      onClick={() => setDarkMode(prev => !prev)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
    <Component {...pageProps} />
  </div>
  );
}