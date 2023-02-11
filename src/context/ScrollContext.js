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

  const jumpToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const jumpToDown = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth',
    });
  };

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
        jumpToTop: jumpToTop,
        jumpToDown: jumpToDown,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export { ScrollContext, ScrollProvider };
