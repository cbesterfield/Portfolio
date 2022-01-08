import React from 'react';
import Hero from '../components/Hero';
import { InfoData, InfoDataTwo } from '../data/InfoData';
import InfoSection from '../components/infoSection/InfoSection';
import { ProjectData } from '../data/ProjectData';
import About from '../components/About';
import Experience from '../components/Experience';
import { InfoDataHomePage, InfoDataHomePageTwo, InfoDataHomePageThree } from '../data/InfoDataHomePage';
import Technologies from '../components/Technologies';

const Home = () => {
  return (
    <>
      <Hero slides={ProjectData} />
      <InfoSection {...InfoDataHomePage} />
      <Experience />
      <About />
      <InfoSection {...InfoDataHomePageTwo} />
      <Technologies />
      <InfoSection {...InfoDataHomePageThree} />
    </>
  );
};

export default Home;
