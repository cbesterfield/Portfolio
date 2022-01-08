import React from 'react';
import { InfoData } from '../data/InfoData';
import InfoSectionBreastCancerNoButton from '../components/infoSection/InfoSectionBreastCancerNoButton';

const BreastCancerPage = () => {
  return (
  <>
    <InfoSectionBreastCancerNoButton {...InfoData} />;
  </>
  )
};

export default BreastCancerPage;