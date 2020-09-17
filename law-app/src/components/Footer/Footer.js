import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Footer/Footer.style";
import { FaFacebook } from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  Form,
  FormInput,
  FormLabel,
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
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <FooterContainer>
      <FooterSubscription>
        <Form>
          <div className="Contact">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <FormInput name="firstName" placeholder="" ref={register} />
              </div>
              <div>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <FormInput name="lastName" placeholder="" ref={register} />
              </div>
              <div>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  name="email"
                  placeholder=""
                  type="email"
                  ref={register}
                />
              </div>
              <FormLabel>Query</FormLabel>
              <FormInput
                name="Query"
                ref={register({ required: true, maxLength: 200 })}
              />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">Policy</FooterLink>
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
            <FooterLink to="/">Twitter</FooterLink>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">LawPost</FooterLink>
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
