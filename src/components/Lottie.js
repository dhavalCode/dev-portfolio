import React from 'react';
import PropTypes from 'prop-types';
import ReactLottie from "lottie-react";

// ----------------------------------------------------------------------

export default function Lottie({ animationDataFile }) {
  return (
      <ReactLottie animationData={animationDataFile} loop={true}  />
  );
}

// ----------------------------------------------------------------------

Lottie.propTypes = {
  animationDataFile: PropTypes.object,
};
