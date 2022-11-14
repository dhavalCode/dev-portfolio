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
    'mr-2 inline-flex items-center space-x-4 p-4 text-primary-700 rounded-t-lg border-b-2 border-primary-700 active dark:text-primary-300 dark:border-primary-300 group';

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
    <section className="container mx-auto mt-16 space-y-10 sm:pb-16 pb-16" id="works">
      <h2 className="text-center font-lato text-4xl font-semibold text-primary-700 dark:text-primary-300 sm:text-5xl">
        Recent Works
      </h2>

      <div className="flex flex-col items-center">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="-mb-px flex flex-nowrap w-full justify-center text-center font-medium hover:cursor-pointer">
            {TABS.map((tab, i) => (
              <li
                key={`tab ${i}`}
                onClick={() => handleOnClick(tab.value)}
                className={
                  currentTab === tab.value
                    ? activeClass
                    : 'group mr-2 inline-flex items-center space-x-4 rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300'
                }
              >
                <Iconify icon={tab.icon} />
                <span>{tab.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{renderTabContent}</div>
      </div>
    </section>
  );
}

Works.propTypes = {};
