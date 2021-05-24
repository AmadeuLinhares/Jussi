import styled from 'styled-components';
import { ContainerComponent } from '../Container';
import { MainProductsCard } from '../MainProductsCard';
// Section 1

export const Container = styled(ContainerComponent)`
  background-color: var(--green-jussi);
  padding: 40px 0;
`;
export const Sections = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContainerDescription = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  margin-bottom: 40px;
  span {
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    text-transform: uppercase;
    color: var(--white);
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 60px;
    margin-right: 25px;
    margin-bottom: 50px;

    span {
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      line-height: 77px;
      /* identical to box height */
      text-transform: uppercase;

      /* white */
      color: var(--white);
    }
  }
`;
export const Banner = styled.div`
  h1 {
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    text-transform: uppercase;
    color: #000000;
  }

  p {
    font-weight: 500;
    font-size: 12px;
  }

  @media only screen and (min-width: 1024px) {
    h1 {
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      line-height: 77px;
      text-transform: uppercase;

      /* black */
      color: #000000;
      width: 538px;
      height: 231px;
    }

    p {
      /* paragraph */
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */

      color: #000000;
      width: 329px;
      height: 72px;
    }
  }
`;

export const ContainerMainProducts = styled.div`
  display: grid;
  row-gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 1024px) {
    width: 460px;
    height: 480px;
    & > div:nth-child(1) {
      margin-top: 170px;
    }
    & > :nth-child(2) {
      margin-left: 250px;
      margin-top: 200px;
    }
    & > :nth-child(3) {
      margin-left: 100px;
    }
  }
`;
export const CardsProducts = styled(MainProductsCard)`
  position: relative;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  @media only screen and (min-width: 1024px) {
    position: absolute;
  }
`;

// ====================
