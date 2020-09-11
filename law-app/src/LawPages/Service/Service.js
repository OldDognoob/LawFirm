import React from 'react';
import { InfoSection} from '../../components';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Info';

function Services() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Services;