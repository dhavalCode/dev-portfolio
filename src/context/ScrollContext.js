import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

// ----------------------------------------------------------------------

const initialState = {
  isScroll: false,
};

const ScrollContext = createContext(initialState);

// ----------------------------------------------------------------------

ScrollProvider.propTypes = {
  children: PropTypes.node,
};

function ScrollProvider({ children }) {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        isScroll: isScroll,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export { ScrollContext, ScrollProvider };
