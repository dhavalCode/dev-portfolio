import React, { useContext } from 'react';
import { ScrollContext } from '../context/ScrollContext';

// -------------------------------------------------

function ScrollToTop() {
  const { isScroll, jumpToTop } = useContext(ScrollContext);

  return (
    <button
      type="button"
      className={`fixed bottom-7 right-5 z-[2000] rounded-full bg-primary-700 p-3 text-xs font-medium uppercase leading-tight text-primary-50 shadow-md transition-all duration-200 ease-in-out hover:bg-primary-700/80 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 active:shadow-lg dark:border-primary-700 dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-600 ${
        isScroll ? 'inline-block' : 'hidden'
      }`}
      onClick={jumpToTop}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        className="h-4 w-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        />
      </svg>
    </button>
  );
}

export default ScrollToTop;
