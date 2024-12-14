import React from 'react'; 
import styled from 'styled-components';
import LogoImg from "../utils/Images/GymLogo.png";

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { LocationOn as LocationOnIcon, Mail as MailIcon, Phone as PhoneIcon } from '@mui/icons-material';

// Footer bileşeni için stil tanımları
const Logo = styled.img`
  height: 150px; /* Logonun boyutunu artırdık */
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%);
  margin-bottom: 5px;
`;

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 10px; /* Daha dar padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 20px; /* Footer ile üstteki içerik arasında boşluk bırakır */

  @media (max-width: 768px) {
    padding: 15px 5px; /* Mobil için daha az padding */
      margin-top: 10px; /* Footer ile üstteki içerik arasında boşluk bırakır */

  }
`;

const FooterText = styled.p`
  font-size: 12px; /* Daha küçük metin */
  margin: 5px 0 0; /* Üst ve alt boşluğu azalttık */`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 10px; /* Daha dar boşluk */
  bottom: 10px;
  font-size: 12px; /* Daha küçük metin boyutu */

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 6px; /* Daha dar boşluk */
    gap: 5px;
  }

  @media (max-width: 768px) {
    position: static;
    align-items: center;
    margin-top: 10px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10px; /* Daha az boşluk */
  position: absolute;
  right: 10px; /* Daha dar boşluk */
  bottom: 10px;

  @media (max-width: 768px) {
    position: static;
    margin-top: 10px;
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 18px; /* Simge boyutu küçüldü */
  transition: color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &.facebook:hover {
    color: #1877f2;
  }

  &.twitter:hover {
    color: #000;
  }

  &.instagram:hover {
    color: #e4405f;
  }

  &.linkedin:hover {
    color: #0077b5;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Logo src={LogoImg} alt="Logo" />

      <ContactInfo>
        <div>
          <MailIcon />
          <span>info@mywebsite.com</span>
        </div>
        <div>
          <PhoneIcon />
          <span>+1 234 567 890</span>
        </div>
        <div>
          <LocationOnIcon />
          <span>1234 My Street, My City, My Country</span>
        </div>
      </ContactInfo>

      <SocialMedia>
        <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
          <XIcon />
        </SocialIcon>
        <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
          <InstagramIcon />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
          <LinkedInIcon />
        </SocialIcon>
      </SocialMedia>

      <FooterText>© {currentYear} GymWeb-A. Tüm hakları saklıdır.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
