import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

export default function ProjectCard({ imgSrc, title, description, repoLink, sourceLink, techIcons }) {
  return (
    <div className="max-w-xs flex flex-col rounded-lg border border-gray-200 shadow-md dark:border-gray-700 dark:bg-neutral-800/70">
      <img className="h-[150px] w-full rounded-t-lg object-cover" src={imgSrc} alt={title} />

      <div className="p-5">
        <h1 className="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">{title}</h1>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{description}</p>

        {techIcons && techIcons.length > 0 && (
          <div className="my-3 mb-7 flex flex-wrap gap-5">
            {techIcons.map(({ icon }, i) => (
              <Iconify key={`icon-${i}`} classes="text-xl" icon={icon} />
            ))}
          </div>
        )}
        {(sourceLink !== '' || repoLink !== '') && (
          <div className="mt-1 flex justify-self-end justify-end space-x-10">
            {repoLink !== '' && (
              <a
                href={repoLink}
                target="_blank"
                rel="noreferrer"
                className="transform transition-all duration-200 hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300"
              >
                <Iconify classes="text-2xl" icon="akar-icons:github-fill" />
              </a>
            )}
            {sourceLink !== '' && (
              <a
                href={sourceLink}
                target="_blank"
                rel="noreferrer"
                className="transform transition-all duration-200 hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300"
              >
                <Iconify classes="text-2xl" icon="iconoir:open-new-window" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  repoLink: PropTypes.string,
  sourceLink: PropTypes.string,
  techIcons: PropTypes.array,
};
