import React, { useContext } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typewriter, Cursor } from 'react-simple-typewriter';
// components
import SocialLinks from '../components/social/SocialLinks';
import mainImg from '../assets/images/logo.png';
// other
import { aboutParagraph, HERO_TITLES } from '../mock/profile';
import { ScrollContext } from '../context/ScrollContext';
import ScrollToTop from '../components/ScrollToTop';

// ----------------------------------------------------------------------

export default function HomeHero() {
  const { isScroll, jumpToDown } = useContext(ScrollContext);

  return (
    <section className="container mx-auto mt-3 flex max-h-screen min-h-screen flex-col items-center justify-around px-5 md:px-1">
      <div className="relative z-0 mx-auto h-full w-full max-w-lg">
        <div className="absolute top-0 -right-4 h-56 w-56 animate-blob rounded-full bg-red-500 opacity-50 mix-blend-multiply blur-2xl filter" />
        <div className="animation-delay-2000 absolute top-0 -left-4 h-56 w-56 animate-blob rounded-full bg-teal-600 opacity-50 mix-blend-multiply blur-2xl filter" />
        <div className="animation-delay-3000 absolute -top-14 left-20 h-56 w-56 animate-blob rounded-full bg-yellow-400 opacity-50 mix-blend-multiply blur-2xl filter" />
      </div>
      <div className="z-50 flex flex-col items-center space-y-5 sm:space-y-10">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            bounce: 0.5,
            duration: 3,
            delay: 1.7,
          }}
          viewport={{ once: true }}
        >
          <Image src={mainImg} className="w-52 object-contain lg:w-64" alt="Logo" />
        </motion.div>
        <h1 className="z-50 font-lato text-2xl font-bold sm:text-4xl md:font-semibold">
          Hi, Im{' '}
          <span className="text-primary-700 dark:text-primary-300">
            <Typewriter
              style={{ color: 'inherit' }}
              words={HERO_TITLES}
              loop={false}
              cursor
              cursorStyle=" "
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <Cursor />
          </span>
        </h1>
        <p className="text-center text-sm sm:text-base md:w-3/5">{aboutParagraph}</p>
        {/* Social Icons */}
        <SocialLinks />
      </div>

      <div
        id="mouse-scroll"
        className={`ml-4 hidden cursor-pointer transition-all duration-200 ${isScroll ? 'opacity-0' : ''}`}
        onClick={jumpToDown}
      >
        <div className="mouse d border-2 border-solid border-primary-700 dark:border-primary-300">
          <div className="mouse-in bg-primary-700 dark:bg-primary-300" />
        </div>
        <div className="mt-3">
          <span className="down-arrow-1 border-r-2 border-b-2 border-solid border-primary-700 dark:border-primary-300" />
          <span className="down-arrow-2 border-r-2 border-b-2 border-solid border-primary-700 dark:border-primary-300" />
          <span className="down-arrow-3 border-r-2 border-b-2 border-solid border-primary-700 dark:border-primary-300" />
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
}

// ----------------------------------------------------------------------

HomeHero.propTypes = {};
