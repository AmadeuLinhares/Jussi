import React from 'react';
import {
  Container,
  ContainerProductCart,
  Image,
  Name,
  Quantity,
  Add,
  Remove,
} from './styles';
import ImageProduct from '../../assets/product_1.png';

export const ProductCart: React.FC = () => {
  return (
    <Container>
      <ContainerProductCart>
        <Image>
          <img src={ImageProduct} alt="productImage" />
        </Image>
        <Name>
          <p>Teste nome do produto</p>
        </Name>
        <Quantity>
          <Add>
            <p>+</p>
          </Add>
          <p>1</p>
          <Remove>
            <p>-</p>
          </Remove>
        </Quantity>
      </ContainerProductCart>
    </Container>
  );
};
