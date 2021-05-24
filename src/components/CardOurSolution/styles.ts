import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  height: 380px;
  padding: 16px;
  background-color: var(--white);
`;
export const AvatarSolution = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey);
  }

  p {
    color: var(--black);
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    text-transform: uppercase;
  }
`;
export const ContainerDetails = styled.div`
  display: grid;
  row-gap: 16px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--black);
  }
`;
export const Description = styled.div`
  display: grid;
  justify-content: flex-start;
  align-items: center;
  row-gap: 16px;
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: var(--pink-jussi);
  }

  ul {
    padding-left: 16px;
  }

  li {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: var(--dark-grey);
  }
`;
export const ContainerButton = styled.button`
  /* button { */
  height: 48px;
  background-color: var(--green-jussi);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--black);
  border-radius: 6px;
  /* } */
`;
