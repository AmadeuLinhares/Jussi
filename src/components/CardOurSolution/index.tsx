import React from 'react';
import {
  Container,
  AvatarSolution,
  Title,
  Description,
  ContainerButton,
  ContainerDetails,
} from './styles';

export const CardOurSolution: React.FC = () => {
  return (
    <Container>
      <AvatarSolution>
        <div>
          <p>p1</p>
        </div>
      </AvatarSolution>

      <ContainerDetails>
        <Title>
          <h1>Nome do Produto #1</h1>
        </Title>
        <Description>
          <p>Descrição do produto #2</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </Description>
      </ContainerDetails>

      <ContainerButton type="button">Ver solução</ContainerButton>
    </Container>
  );
};
