import React from 'react';
import { Container, ContainerFooter, Logo, Social } from './styles';

import LogoImg from '../../assets/wppcompany.png';
import Instagram from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import Linkedin from '../../assets/linkedin.png';

export const Footer: React.FC = () => {
  return (
    <Container>
      <ContainerFooter>
        <Logo>
          <img src={LogoImg} alt="alt" />
        </Logo>
        <Social>
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="instagram" />
          <img src={Linkedin} alt="linkedin" />
        </Social>
      </ContainerFooter>
    </Container>
  );
};
