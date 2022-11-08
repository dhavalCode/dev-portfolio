import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

export default function TechSkillIcon({ label, proficiency, icon, iconClasses }) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full p-2 shadow-md shadow-neutral-300 dark:shadow-neutral-700">
      <Iconify icon={icon} classes={iconClasses} />
    </div>
  );
}

// ----------------------------------------------------------------------

TechSkillIcon.propTypes = {
  label: PropTypes.string,
  proficiency: PropTypes.string,
  icon: PropTypes.string,
  iconClasses: PropTypes.string,
  popoverId: PropTypes.string,
};
