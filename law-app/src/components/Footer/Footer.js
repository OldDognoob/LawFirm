import React from "react";
import { useForm } from "react-hook-form";
// import { Button } from "../../globalStyles";
import { FaFacebook } from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.style";

function Footer() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("query"));

  return (
    <FooterContainer>
      <FooterSubscription>
        <Form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input name="firstName" placeholder="" ref={register} />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input name="lastName" placeholder="" ref={register} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                placeholder=""
                type="email"
                ref={register}
              />
            </div>
            <label>Query</label>
            <input
              name="Query"
              ref={register({ required: true, maxLength: 200 })}
            />
            <input type="submit" />
          </form>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">Contact with Us</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Support</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/">Submit Video</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">Facebook</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            GM & PARTNERS
          </SocialLogo>
          <WebsiteRights>GM & PARTNERS © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
