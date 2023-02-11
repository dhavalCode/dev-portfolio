import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function HeadingAnimate({ children, amount = 0.5 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7}}
      whileInView={{ opacity: 1, scale: 1}}
      transition={{
        duration: 0.6,
      }}
      viewport={{ once: false, amount: amount }}
    >
      {children}
    </motion.div>
  );
}

HeadingAnimate.propTypes = {
  children: PropTypes.node,
  amount: PropTypes.number,
};

export default HeadingAnimate;
