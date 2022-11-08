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

    /* // If is set in localstorage
    if (localStorage.getItem('theme-mode')) {
      // If light, make dark and save in localstorage
      if (localStorage.getItem('theme-mode') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme-mode', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme-mode', 'light');
      }
    } else {
      // If not in localstorage
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme-mode', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme-mode', 'dark');
      }
    } */
  };

  return {
    darkModeEnabled,
    toggleMode,
  };
}
