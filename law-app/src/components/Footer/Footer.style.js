import styled from "styled-components";
import { FaBalanceScale } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0e101c;
  max-width: 500px;
  margin: 0 auto;
  font-weight: 100;
  color: white;
  text-align: center;
  padding: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(79, 98, 148);
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;
export const FormLabel = styled.div`
  line-height: 3;
  text-align: left;
  display: block;
  margin-bottom: 15px;
  margin-top: 20px;
  color: white;
  font-size: 14px;
  font-weight: 200;
  color: white;
`;

export const FormInput = styled.input`
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  padding: 10px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  margin-bottom: 10px;
  font-size: 14px;
  &::placeholder {
    color: #242424;
  }
  &::disabled {
    opacity:0.4;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaBalanceScale)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const Button = styled.button`
  display: block;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 12px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  color: white;
  align-items: center;
  text-transform: uppercase;
  border: none;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  outline: none;
  border: none;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#EC5990')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;