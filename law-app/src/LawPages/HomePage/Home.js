import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Info';
import { InfoSection } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;