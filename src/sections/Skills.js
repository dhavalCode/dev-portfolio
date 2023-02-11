import React from 'react';
// components
import AnimatedLottie from '../components/Lottie';
import TechSkillIcon from '../components/skills/TechIcon';
import ListItem from '../components/skills/ListItem';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mock
import { BACKEND_DESCRIPTIONS, BACKEND_SKILLS, FRONTEND_DESCRIPTIONS, FRONTEND_SKILLS } from '../mock/tech-skills';
import codingAnimationData from '../mock/lottie/coding.json';
import cloudAnimationData from '../mock/lottie/cloudinfra.json';

// ----------------------------------------------------------------------

export default function Skills() {
  return (
    <>
      <section className="container mx-auto mt-16 text-center sm:mt-10">
        <HeadingAnimate>
          <h2 className="mb-5 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            What i do
          </h2>
        </HeadingAnimate>

        {/* Frontend Development */}
        <LoadAnimate amount={0}>
          <div className="container mx-auto my-5 flex flex-col items-center p-5 md:flex-row">
            <div className="mb-10 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
              <AnimatedLottie animationDataFile={codingAnimationData} />
            </div>
            <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
              <HeadingAnimate>
                <h1 className="mb-4 text-xl font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-2xl">
                  Frontend Development
                </h1>
              </HeadingAnimate>
              {/* Tech Stack  */}
              <div className="my-3 flex flex-wrap justify-items-center gap-x-4 gap-y-7 text-center sm:gap-x-7">
                {FRONTEND_SKILLS.map(({ label, icon, proficiency, iconClasses }, i) => (
                  <TechSkillIcon
                    key={`frontend-skill-${i}`}
                    popoverId={`frontend-skill-${i}`}
                    icon={icon}
                    iconClasses={iconClasses}
                    label={label}
                    proficiency={proficiency}
                  />
                ))}
              </div>
              {/* Description Part  */}
              <div className="mt-7 w-full space-y-5">
                {FRONTEND_DESCRIPTIONS.map((paragraph, i) => (
                  <ListItem key={`frontend-des-${i}`} paragraph={paragraph} />
                ))}
              </div>
            </div>
          </div>
        </LoadAnimate>
        {/* Backend Development */}
        <LoadAnimate amount={0}>
          <div className="container mx-auto my-5 flex flex-col items-center p-5 md:flex-row">
            <div className="mb-10 w-full md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
              <AnimatedLottie animationDataFile={cloudAnimationData} />
            </div>
            <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
              <HeadingAnimate>
                <h1 className="mb-4 text-xl font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-2xl">
                  Backend Development
                </h1>
              </HeadingAnimate>
              {/* Tech Stack  */}
              <div className="my-3 flex flex-wrap justify-items-center gap-x-4 gap-y-7 text-center sm:gap-x-7">
                {BACKEND_SKILLS.map(({ icon, iconClasses, label, proficiency }, i) => (
                  <TechSkillIcon
                    key={`backend-skill-${i}`}
                    popoverId={`backend-skill-${i}`}
                    icon={icon}
                    iconClasses={iconClasses}
                    label={label}
                    proficiency={proficiency}
                  />
                ))}
              </div>
              {/* Description Part  */}
              <div className="mt-5 w-full space-y-5 sm:mt-7">
                {BACKEND_DESCRIPTIONS.map((paragraph, i) => (
                  <ListItem key={`backend-des-${i}`} paragraph={paragraph} />
                ))}
              </div>
            </div>
          </div>
        </LoadAnimate>
        {/* Quote Section  */}

        <div className="container mx-auto px-3 py-6">
          <LoadAnimate amount={0}>
            <div className="z-20 mx-auto w-full text-center lg:w-3/4 xl:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="mb-4 inline-block h-8 w-8 text-gray-500"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
              <p className="text-base leading-relaxed sm:text-lg">
                Most good programmers do programming not because they expect to get paid or get adulation by the public,
                but because it is fun to program.
              </p>
              <span className="mt-8 mb-2 inline-block h-1 w-10 rounded bg-primary-700 dark:bg-yellow-300" />
              <h2 className="title-font text-sm font-medium tracking-wider">Linus Torvalds</h2>
              <p className="text-neutral-400">Linux Founder</p>
            </div>
          </LoadAnimate>
        </div>
      </section>
      <div id="works" />
    </>
  );
}
