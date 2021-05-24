import React from 'react';
import { Container, Principal, Subcontainer } from './styles';

interface ContainerInterface {
  children: React.ReactNode;
}
export const ContainerComponent: React.FC<ContainerInterface> = ({
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Subcontainer>
        <Principal>{children}</Principal>
      </Subcontainer>
    </Container>
  );
};
