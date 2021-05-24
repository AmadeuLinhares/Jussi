import React from 'react';
import {
  Container,
  Main,
  ContainerInformation,
  Title,
  Text,
  ContainerButton,
  Logo,
} from './styles';

import LogoJussi from '../../assets/image-jussi.png';

export const Description: React.FC = () => {
  return (
    <Container>
      <Main>
        <ContainerInformation>
          <Title>Olá, somos a Jüssi</Title>
          <Text>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </Text>
          <ContainerButton>
            <button type="button">Conheça a Jüssi</button>
          </ContainerButton>
        </ContainerInformation>
        <Logo>
          <img src={LogoJussi} alt="Jussi" />
        </Logo>
      </Main>
    </Container>
  );
};
