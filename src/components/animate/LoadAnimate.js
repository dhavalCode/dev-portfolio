import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function LoadAnimate({ children, amount = 0.5 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
      }}
      viewport={{ once: false, amount: amount }}
    >
      {children}
    </motion.div>
  );
}

LoadAnimate.propTypes = {
  children: PropTypes.node,
  amount: PropTypes.number,
};

export default LoadAnimate;
