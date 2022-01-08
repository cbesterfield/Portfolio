import React from 'react';
import { InfoData, InfoDataFour } from '../data/InfoData';
import InfoSectionBitcoinNoButton from '../components/infoSection/InfoSectionBitcoinNoButton';

const BitcoinPage = () => {
  return (
  <>
    <InfoSectionBitcoinNoButton {...InfoDataFour} />;
  </>
  )
};

export default BitcoinPage;