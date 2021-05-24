import styled from 'styled-components';
import { ContainerComponent } from '../Container';

export const Container = styled(ContainerComponent)`
  background-color: var(--white);
  min-height: 648px;
  @media only screen and (min-width: 1024px) {
  }
`;

export const Main = styled.div`
  padding-top: 50px;
  display: grid;
  row-gap: 20px;
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 110px;
  }
`;
export const ContainerInformation = styled.div`
  display: grid;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
  grid-template-rows: repeat(3, min-content);

  @media only screen and (min-width: 1024px) {
    width: 241px;
  }
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  color: var(--black);
  @media only screen and (min-width: 1024px) {
    font-size: 32px;
    line-height: 40px;
  }
`;
export const Text = styled.div`
  color: var(--black);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const ContainerButton = styled.div`
  button {
    width: 162px;
    height: 48px;
    border: solid 1px black;
    border-radius: 6px;
    /* font-weight: bold; */
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const Logo = styled.div`
  img {
    width: 300px;
    height: 220px;
    background-color: grey;
    border-radius: 4px;
  }
  @media only screen and (min-width: 1024px) {
    img {
      width: 676px;
      height: 520px;
      background-color: grey;
    }
  }
`;
