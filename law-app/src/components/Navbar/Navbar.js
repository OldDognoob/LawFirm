import React from "react";
import { Nav, NavbarContainer, LawLogo, LawIcon } from "./Navbar.style";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <LawLogo to="/">
            <LawIcon />
            GM & PARTNERS
          </LawLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
