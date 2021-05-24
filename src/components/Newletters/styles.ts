import styled from 'styled-components';
import { ContainerComponent } from '../Container';

export const Container = styled(ContainerComponent)`
  background-color: var(--black);
  min-height: 436px;
  justify-content: center;
  align-items: center;
`;
export const ContainerNews = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 676px;
  row-gap: 42px;
  margin: 0 auto;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 24px;
    color: var(--green-jussi);
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    /* or 125% */
    text-align: center;
    text-transform: uppercase;
    color: var(--white);
  }
`;
export const ContainerRegister = styled.div`
  width: 100%;
  border-bottom: solid 1px var(--green-jussi);
  display: flex;
  justify-content: space-between;
  button {
    color: var(--green-jussi);
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    /* identical to box height, or 250% */
    text-transform: uppercase;
  }

  input {
    outline: none;
    width: 100%;
    background-color: transparent;
    border: none;
    color: var(--white);
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: var(--white);
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: var(--white);
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: var(--white);
    }
    :-moz-placeholder {
      /* Firefox 18- */
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: var(--white);
    }
  }
`;
