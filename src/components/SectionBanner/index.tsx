import React from 'react';
import {
  Container,
  ContainerDescription,
  ContainerMainProducts,
  CardsProducts,
  Sections,
  Banner,
} from './styles';

import ImageProduct1 from '../../assets/product_1.png';
import ImageProduct2 from '../../assets/product_2.png';
import ImageProduct3 from '../../assets/product_3.png';

export const SectionBanner: React.FC = () => {
  const string = '//';
  return (
    <Container>
      <Sections>
        <ContainerDescription>
          <span>{string}</span>
          <Banner>
            <h1>Criamos lojas que vendem mais.</h1>
            <p>
              A Jüssi é especialista na criação de lojas usando a plataforma
              VTEX. Precisa criar sua loja ou migrar de plataforma?
            </p>
            <button type="button">Veja nossas solucoes</button>
          </Banner>
        </ContainerDescription>
        <ContainerMainProducts>
          <CardsProducts image={ImageProduct1} />
          <CardsProducts image={ImageProduct2} />
          <CardsProducts image={ImageProduct3} />
        </ContainerMainProducts>
      </Sections>
    </Container>
  );
};
