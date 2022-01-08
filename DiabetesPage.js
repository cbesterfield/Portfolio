import React from 'react';
import { InfoData, InfoDataThree } from '../data/InfoData';
import InfoSectionDiabetesNoButton from '../components/infoSection/InfoSectionDiabetesNoButton';

const DiabetesPage = () => {
  return (
  <>
    <InfoSectionDiabetesNoButton {...InfoDataThree} />;
  </>
  )
};

export default DiabetesPage;