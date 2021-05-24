import styled from 'styled-components';

interface Iresult {
  open: boolean;
}

export const Container = styled.div`
  background-color: var(--white);
  padding: 15px 34px;
`;
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoOptions = styled.div`
  display: flex;
  align-items: center;
  & > div:not(:first-child) {
    margin-left: 32px;
  }

  div {
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: var(--black);
    }
  }
`;
export const ClientOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div:not(:first-child) {
    margin-left: 32px;
  }
`;
export const ContainerSearch = styled.div`
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 24px;
  width: 240px;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
`;
export const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
    padding: 8px;
  }
  input {
    padding: 8px 8px 8px 16px;
    outline: none;
    width: 100%;
    background-color: transparent;
    border: none;
    color: var(--black);
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: var(--pink-jussi);
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: var(--pink-jussi);
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: var(--pink-jussi);
    }
    :-moz-placeholder {
      /* Firefox 18- */
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: var(--pink-jussi);
    }
  }
`;
export const Results = styled.div<Iresult>`
  display: ${({ open }) => {
    return open ? 'flex' : 'none';
  }};
  width: 500px;
  height: 300px;
  position: absolute;
  background-color: var(--grey);
  z-index: 9;
  top: 50px;
  right: -115px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  &::after {
    content: '';
    position: absolute;
    top: -6%;
    left: 50%;
    margin-left: 0px;
    border-width: 10px;
    border-style: solid;
    border-color: var(--grey) transparent transparent transparent;
    transform: rotate(180deg);
  }
`;

export const Login = styled.div``;
export const ContainerProductCart = styled.div`
  overflow-y: scroll;
  height: 280px;
  width: 90%;
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
export const Cart = styled.div`
  position: relative;
`;
export const ResultsCart = styled.div`
  width: 500px;
  height: 300px;
  position: absolute;
  background-color: var(--grey);
  z-index: 9;
  top: 45px;
  right: -25px;
  border-radius: 16px;
  display: grid;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 0;
  /* overflow-y: scroll; */

  &::after {
    content: '';
    position: absolute;
    top: -6%;
    left: 92%;
    margin-left: 0px;
    border-width: 10px;
    border-style: solid;
    border-color: var(--grey) transparent transparent transparent;
    transform: rotate(180deg);
  }
`;
