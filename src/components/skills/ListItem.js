import React from 'react';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

export default function ListItem({ paragraph }) {
  return (
    <div className="flex h-full w-full items-center rounded-lg bg-primary-800/10 p-4">
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        className="mr-4 h-6 w-6 flex-shrink-0 text-primary-800 dark:text-primary-400"
        viewBox="0 0 24 24"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
      <span className="text-sm tracking-normal text-primary-800 dark:text-primary-400 sm:text-base sm:tracking-wide">
        {paragraph}
      </span>
    </div>
  );
}

// ----------------------------------------------------------------------

ListItem.propTypes = {
  paragraph: PropTypes.string,
};
