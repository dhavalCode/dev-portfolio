import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

export default function TechSkillIcon({ label, proficiency, icon, iconClasses }) {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full p-2 shadow-md shadow-neutral-300 dark:shadow-neutral-700">
      <span className="group relative cursor-pointer">
        <span className="pointer-events-none absolute -top-[4.7rem] left-1/2 z-[1000] w-32 min-w-fit -translate-x-1/2 whitespace-nowrap rounded-xl bg-neutral-700 px-3 py-1 opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-t-neutral-700 before:content-[''] group-hover:opacity-100 dark:bg-neutral-700 dark:before:border-t-neutral-700">
          <div className="flex items-center justify-between mb-2 mt-1">
            <div className="text-left text-xs  text-neutral-50"> {label}</div>
            <span className="ml-2 text-xs text-neutral-50">{proficiency}</span>
          </div>
          <div className="mb-4 h-2.5 w-full rounded-full bg-neutral-50">
            <div className="h-2.5 rounded-full bg-primary-400" style={{ width: proficiency }} />
          </div>
        </span>
        <Iconify icon={icon} classes={iconClasses} />
      </span>
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
