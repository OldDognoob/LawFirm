import React from "react";
import { InfoSection } from "../../components";
import { Contact } from "./Info";
// import { homeObjOne} from './Info';

function ContactUs() {
  return (
    <>
      {/* <InfoSection {...homeObjOne} />  */}
      {/* <InfoSection {...homeObjThree} />  */}
      <InfoSection {...Contact} />
    </>
  );
}

export default ContactUs;
