import styled from 'styled-components';
import { ContainerComponent } from '../Container';

export const Container = styled(ContainerComponent)`
  background-color: var(--grey);
  min-height: 80px;
`;
export const Main = styled.div`
  display: grid;
  row-gap: 20px;
  /* padding-top: 40px; */
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Title = styled.div`
  color: var(--black);
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  @media only screen and (min-width: 1024px) {
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;
export const Brands = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 20px;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 1024px) {
    justify-content: space-between;
    img {
      margin-bottom: 0;
      margin-left: 48px;
    }
  }
`;
