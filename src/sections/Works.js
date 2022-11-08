import React, { useState } from 'react';
import PropTypes from 'prop-types';
// components
import Iconify from '../components/Iconify';
import ProjectCard from '../components/works/ProjectCard';
import { PROJECTS, PROJECT_CATEGORY, TABS } from '../mock/projects';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Works() {
  const [currentTab, setCurrentTab] = useState('all');

  const activeClass =
    'mr-2 inline-flex items-center space-x-4 p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group';

  const handleOnClick = (_value) => {
    setCurrentTab(_value);
  };

  const renderTabContent = PROJECTS.map((project, i) => {
    if (currentTab === PROJECT_CATEGORY.ALL) {
      return <ProjectCard key={`project-${i}`} {...project} />;
    }

    if (project.category.includes(currentTab)) {
      return <ProjectCard key={`project-${i}`} {...project} />;
    }

    return null;
  });

  return (
    <section className="container mx-auto mt-5 space-y-10 pb-32 sm:mt-10">
      <h2 className="text-center font-lato text-5xl font-semibold text-primary-700 dark:text-primary-300">
        Recent Works
      </h2>

      <div className="flex flex-col items-center">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="-mb-px flex flex-wrap justify-center text-center text-lg font-medium text-gray-500 hover:cursor-pointer dark:text-gray-400">
            {TABS.map((tab, i) => (
              <li
                key={`tab ${i}`}
                onClick={() => handleOnClick(tab.value)}
                className={
                  currentTab === tab.value
                    ? activeClass
                    : 'group mr-2 inline-flex items-center space-x-4 rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
                }
              >
                <Iconify icon={tab.icon} />
                <span>{tab.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-4">{renderTabContent}</div>
      </div>
    </section>
  );
}

Works.propTypes = {};
