import React from 'react';
import { InfoData, InfoDataThree, InfoDataTwo, InfoDataFour } from '../data/InfoData';
import InfoSection from '../components/infoSection/InfoSection';
import InfoSectionBreastCancer from '../components/infoSection/InfoSectionBreastCancer';
import InfoSectionPortfolio from '../components/infoSection/InfoSectionPortfolio';
import InfoSectionDiabetes from '../components/infoSection/InfoSectionDiabetes';
import InfoSectionBitcoin from '../components/infoSection/InfoSectionBitcoin';

const ProjectPage = () => {
  return (
  <>
    <InfoSectionPortfolio {...InfoDataTwo} />;
    <InfoSectionBitcoin {...InfoDataFour} />;
    <InfoSectionBreastCancer {...InfoData} />;
    <InfoSectionDiabetes {...InfoDataThree} />;
  </>
  )
};

export default ProjectPage;