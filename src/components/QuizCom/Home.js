import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data';
import InfoSection from './InfoSection';

function Home() {
  return (
    <>
     <InfoSection {...homeObjThree} />
     <InfoSection {...homeObjTwo} />

    </>
  );
}

export default Home;
