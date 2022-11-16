import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function LoadAnimate({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: false, amount: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

LoadAnimate.propTypes = {
  children: PropTypes.node,
};

export default LoadAnimate;
