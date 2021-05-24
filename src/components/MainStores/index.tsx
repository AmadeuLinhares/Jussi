import React from 'react';
import { Container, Main, Title, Brands } from './styles';

import BrastempLogo from '../../assets/logo-brastemp.png';
import ComprsCertaLogo from '../../assets/logo-compra-certa.png';
import ConsulLogo from '../../assets/logo-consul.png';
import BarLogo from '../../assets/logo-thebar.png';

export const MainStores: React.FC = () => {
  return (
    <Container>
      <Main>
        <Title>Nossas principais lojas VTEX →</Title>
        <Brands>
          <img src={BrastempLogo} alt="brastemp" />
          <img src={ComprsCertaLogo} alt="brastemp" />
          <img src={ConsulLogo} alt="brastemp" />
          <img src={BarLogo} alt="brastemp" />
        </Brands>
      </Main>
    </Container>
  );
};
