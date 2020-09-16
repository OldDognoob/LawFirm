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
  const {register, handleSubmit, watch, errors} = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  console.log(watch("query"));

  return (
    <FooterContainer>
      <FooterSubscription>
        <Form>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <input
          type="text"
          name="First name"
          ref={register({ required: true, maxLength: 80 })}
        />
        <label>Last name</label>
        <input
          type="text"
          name="Last name"
          ref={register({ required: true, maxLength: 100 })}
        />
        <label>Email</label>
        <input
          type="text"
          name="Email"
          ref={register({
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        <label>Mobile number</label>
        <input
          type="tel"
          name="Mobile number"
          ref={register({ required: true, maxLength: 11, minLength: 8 })}
        />
        <label>Query</label>
        <input
        name="query"
        ref={register({ required: true, maxLength: 200})}
      />
        <label>Title</label>
        <select name="Title" ref={register({ required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
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

