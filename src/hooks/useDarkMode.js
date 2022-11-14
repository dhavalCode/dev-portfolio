import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export default function useDarkMode() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);

  useEffect(() => {
    if (window.localStorage.getItem('theme-mode') === 'light') {
      document.documentElement.classList.remove('dark');
      setDarkModeEnabled(false);
    } else {
      document.documentElement.classList.add('dark');
      setDarkModeEnabled(true);
    }
  }, []);

  const toggleMode = () => {
    if (darkModeEnabled) {
      setDarkModeEnabled(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-mode', 'light');
    } else {
      setDarkModeEnabled(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-mode', 'dark');
    }
  };

  return {
    darkModeEnabled,
    toggleMode,
  };
}
