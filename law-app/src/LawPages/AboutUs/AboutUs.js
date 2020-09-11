import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Info';

function ContactUs() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default ContactUs;