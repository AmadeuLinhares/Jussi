import React from 'react';
import {
  Container,
  ContactContainer,
  ContainerEmail,
  ContainerPhrase,
} from './styles';

export const Contact: React.FC = () => {
  return (
    <Container>
      <ContactContainer>
        <ContainerPhrase>
          <h1>
            Essa loja foi construída usando uma das nossas soluções da
            plataforma VTEX. tenha a sua.
          </h1>
        </ContainerPhrase>
        <ContainerEmail>
          <span>Entre em contato</span>
          <a href="mailto:comercial@jussi.com.br">comercial@jussi.com.br</a>
        </ContainerEmail>
      </ContactContainer>
    </Container>
  );
};
