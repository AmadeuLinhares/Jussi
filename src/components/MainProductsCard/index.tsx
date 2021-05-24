import React from 'react';
import { Container, ContainerPicture, ContainerButton } from './styles';
import Image from '../../assets/product_1.png';

interface MainProductsInterface {
  image: string;
}
export const MainProductsCard: React.FC<MainProductsInterface> = ({
  image,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <ContainerPicture>
        <img src={image} alt="produto" />
      </ContainerPicture>
      <ContainerButton>Comprar em 12x</ContainerButton>
    </Container>
  );
};
