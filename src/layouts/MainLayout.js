import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
// Components
import Header from './Header';
// hooks
import useDarkMode from '../hooks/useDarkMode';

// -----------------------------------------------------------

export default function MainLayout({ children, meta }) {
  const { darkModeEnabled, toggleMode } = useDarkMode();

  return (
    <>
      <Head>{meta}</Head>

      <Header darkModeEnabled={darkModeEnabled} toggleMode={toggleMode} />

      <main className="overflow-x-hidden">{children}</main>
    </>
  );
}

// ---------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.node,
};
