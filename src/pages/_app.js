import PropTypes from 'prop-types';
// provider
import { ScrollProvider } from '../context/ScrollContext';
// style
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ScrollProvider>
      <Component {...pageProps} />
    </ScrollProvider>
  );
}

// ---------------------------------------

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};
