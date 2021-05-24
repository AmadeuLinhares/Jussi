import styled from 'styled-components';
import { ContainerComponent } from '../Container';

export const Container = styled(ContainerComponent)`
  background-color: var(--white);
  min-height: 557px;
`;

export const Main = styled.div`
  display: grid;
  row-gap: 30px;
  @media only screen and (min-width: 1024px) {
  }
`;
export const Title = styled.div`
  span {
    color: var(--green-jussi);
  }

  h1 {
    color: var(--black);
  }
  @media only screen and (min-width: 1024px) {
    span {
      font-family: Barlow;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 40px;
      /* identical to box height, or 125% */
      text-transform: uppercase;
    }

    h1 {
      font-family: Barlow;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 40px;
      /* identical to box height, or 125% */
      text-transform: uppercase;
    }
  }
`;
export const ContainerCards = styled.div`
  display: grid;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 1024px) {
    /* grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;
