import React from 'react';
// Layout
import MainLayout from '../layouts/MainLayout';
// sections
import HomeHero from '../sections/HomeHero';
import Skills from '../sections/Skills';
import Works from '../sections/Works';
import Contact from '../sections/Contact';
// mock
import { documentTitle } from '../mock/profile';

// ------------------------------------------------

export default function Home() {
  const meta = (
    <>
      <title>{documentTitle}</title>
    </>
  );

  return (
    <MainLayout meta={meta}>
      <HomeHero />
      {/* Skill Section  */}
      <Skills />
      {/* Works Section  */}
      <Works />
      {/* Contact Section  */}
      <Contact />
    </MainLayout>
  );
}
