import React from 'react';
import {
  AddCart,
  Container,
  Title,
  ContainerProductList,
  Price,
} from './styles';

interface IproductList {
  name: string;
  price: string;
}

export const ProductList: React.FC<IproductList> = ({ name, price }) => {
  return (
    <Container>
      <ContainerProductList>
        <Title>{name}</Title>
        <Price>{price}</Price>
        <AddCart>
          <p>Adicionar ao carrinho</p>
        </AddCart>
      </ContainerProductList>
    </Container>
  );
};
