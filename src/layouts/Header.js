import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
// context
import { ScrollContext } from '../context/ScrollContext';

// ----------------------------------------------------------------------

export default function Header({ darkModeEnabled, toggleMode }) {
  const { isScroll } = useContext(ScrollContext);

  return (
    <header className="container mx-auto">
      <nav
        className={`fixed top-0 right-0 z-[1000] flex w-full items-center justify-between h-16 px-4 md:h-16 md:px-[4%] ${
          isScroll ? 'backdrop-blur-xl backdrop-filter' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <h3 className="text-md font-lato font-semibold tracking-widest md:text-2xl">&lt;DhavalPatel /&gt;</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <ul className="flex items-center space-x-3">
            <li>
              <a href="#works" className="text-sm xs:text-base">
                Works
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm xs:text-base">
                Contact
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
        </motion.div>
      </nav>
    </header>
  );
}

// ----------------------------------------------------------------------

Header.propTypes = {
  darkModeEnabled: PropTypes.bool,
  toggleMode: PropTypes.func,
};
