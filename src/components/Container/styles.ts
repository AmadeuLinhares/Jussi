import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 100% auto;
  grid-template-rows: auto;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: auto 100% auto;
  }
  @media only screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: auto 100% auto;
  }
`;
export const Subcontainer = styled.div`
  grid-area: 1/2/2/3;
  display: grid;
  grid-template-columns: 10% auto 10%;
  /* grid-template-rows: 20px auto 20px; */
  @media only screen and (min-width: 1024px) {
    grid-area: 1/2/2/3;
    display: grid;
    grid-template-columns: 10% auto 10%;
    /* grid-template-rows: 20px auto 20px; */
  }
  @media only screen and (min-width: 1440px) {
    grid-area: 1/2/2/3;
    display: grid;
    grid-template-columns: 10% auto 10%;
    /* grid-template-rows: 20px auto 20px; */
  }
`;
export const Principal = styled.div`
  grid-area: 1/2/2/3;
  display: grid;
  row-gap: 20px;
  @media only screen and (min-width: 1024px) {
    row-gap: 40px;
  }
  @media only screen and (min-width: 1440px) {
  }
`;
