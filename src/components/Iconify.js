import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

export default function Iconify({ classes, icon }) {
  return <Icon className={classes} icon={icon} />;
}

Iconify.propTypes = {
  classes: PropTypes.string,
  icon: PropTypes.string,
};
