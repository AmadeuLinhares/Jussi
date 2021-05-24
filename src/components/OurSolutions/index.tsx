import React from 'react';
import { Container, Main, Title, ContainerCards } from './styles';
import { CardOurSolution } from '../CardOurSolution';

export const OurSolutions: React.FC = () => {
  const string = '// ';
  return (
    <Container>
      <Main>
        <Title>
          <h1>
            <span>{string}</span>
            Nossas soluções
          </h1>
        </Title>
        <ContainerCards>
          <CardOurSolution />
          <CardOurSolution />
          <CardOurSolution />
          <CardOurSolution />
        </ContainerCards>
      </Main>
    </Container>
  );
};
