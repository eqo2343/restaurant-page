
import React from 'react';
import Hero from "../components/Hero";
import Promos from '../components/Promos';
import LatestCravings from '../components/LatestCravings';
import EndCards from '../components/EndCards';
import MemberPromo from '../components/MemberPromo';
import DownloadApp from '../components/DownloadApp';


const HomePage = () => {
  return (
    <>
    <Hero />
    <Promos />
    <LatestCravings />
    <EndCards />
    <MemberPromo />
    <DownloadApp />
    </>
  )
}

export default HomePage