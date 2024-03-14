import React, { useState } from 'react';
// components
import Iconify from '../components/Iconify';
import ProjectCard from '../components/works/ProjectCard';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mocks
import { PROJECTS, PROJECT_CATEGORY, TABS } from '../mock/projects';

// ----------------------------------------------------------------------

export default function Works() {
  const [currentTab, setCurrentTab] = useState('all');

  const activeClass =
    'inline-flex min-w-fit items-center space-x-4 p-4 text-primary-700 rounded-t-lg border-b-2 border-primary-700 active dark:text-primary-300 dark:border-primary-300 group';

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
    <>
      <section className="container mx-auto mt-16 space-y-10 pb-16 sm:pb-16 space-x-5 md:space-x-0">
        <HeadingAnimate amount={1}>
          <h2 className="text-center font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            Recent Works
          </h2>
        </HeadingAnimate>

        <LoadAnimate amount={0}>
          <div className="flex w-full flex-col items-center">
            <ul
              id="works-tab"
              className="-mb-px flex max-w-full gap-x-2 border-b border-gray-200 font-medium  hover:cursor-pointer dark:border-gray-700"
            >
              {TABS.map((tab, i) => (
                <li
                  key={`tab ${i}`}
                  onClick={() => handleOnClick(tab.value)}
                  className={
                    currentTab === tab.value
                      ? activeClass
                      : 'group inline-flex min-w-fit items-center space-x-4 rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300'
                  }
                >
                  <Iconify icon={tab.icon} />
                  <span>{tab.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-y-7 lg:grid-cols-3 lg:px-7 xl:grid-cols-4 xl:px-0">
              {renderTabContent}
            </div>
          </div>
        </LoadAnimate>
      </section>
      <div id="contact" />
    </>
  );
}

Works.propTypes = {};
