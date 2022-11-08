import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// context
import { ScrollContext } from '../context/ScrollContext';

// ----------------------------------------------------------------------

export default function Header({ darkModeEnabled, toggleMode }) {
  const { isScroll } = useContext(ScrollContext);

  return (
    <header className="relative container mx-auto">
      <nav
        className={`fixed z-[1000] flex h-14 w-full items-center justify-between md:h-16 ${
          isScroll ? 'backdrop-blur-xl backdrop-filter' : ''
        }`}
      >
        <h3 className="text-md font-lato font-semibold tracking-widest md:text-2xl">&lt;DhavalPatel /&gt;</h3>
        <ul className="flex items-center space-x-3 pr-1 sm:pr-5 md:pr-6">
          <li>
            <a href="#works" className="text-sm xs:text-base">
              Works
            </a>
          </li>
          <li>
            <a href="#hireMe" className="text-sm xs:text-base">
              Hire Me
            </a>
          </li>
          <li>
            <button
              className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              onClick={toggleMode}
            >
              {darkModeEnabled ? (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// ----------------------------------------------------------------------

Header.propTypes = {
  darkModeEnabled: PropTypes.bool,
  toggleMode: PropTypes.func,
};
