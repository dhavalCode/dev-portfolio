import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function HeadingAnimate({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: false, amount: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

HeadingAnimate.propTypes = {
  children: PropTypes.node,
};

export default HeadingAnimate;
