import styled from 'styled-components';
import { ContainerComponent } from '../Container';

export const Container = styled(ContainerComponent)`
  background-color: var(--pink-jussi);
  min-height: 480px;
  justify-content: center;
  align-items: center;
`;

export const ContactContainer = styled.div`
  @media only screen and (min-width: 1024px) {
    display: grid;
    row-gap: 32px;
    justify-content: center;
    align-items: center;
    height: 230px;
  }
`;

export const ContainerPhrase = styled.div`
  @media only screen and (min-width: 1024px) {
    width: 676px;
    height: 120px;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 40px;
      /* or 125% */
      text-align: center;
      text-transform: uppercase;

      /* white */
      color: var(--white);
    }
  }
`;

export const ContainerEmail = styled.div`
  @media only screen and (min-width: 1024px) {
    display: grid;
    row-gap: 16px;
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */
      text-align: center;

      /* white */
      color: var(--white);
    }
    a {
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 24px;
      /* identical to box height, or 75% */
      text-align: center;
      text-decoration: none;
      /* white */
      color: var(--white);
    }
  }
`;
