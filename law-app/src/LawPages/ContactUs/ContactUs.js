import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from './Info';

function ContactUs() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default ContactUs;