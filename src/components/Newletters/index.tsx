import React from 'react';
import { Container, ContainerNews, Title, ContainerRegister } from './styles';

export const Newletters: React.FC = () => {
  const string = '//';

  return (
    <Container>
      <ContainerNews>
        <Title>
          <span>{string}</span>
          <h1>receba novidades da nossa área de produtos digitais</h1>
        </Title>
        <ContainerRegister>
          <input type="email" placeholder="Digite seu e-mail" />
          <button type="submit">cadastrar</button>
        </ContainerRegister>
      </ContainerNews>
    </Container>
  );
};
