import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: solid 1px var(--dark-grey);
`;
export const ContainerProductCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Image = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  img {
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
`;
export const Name = styled.div``;
export const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
`;
export const Add = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 24px;
  }
`;
export const Remove = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 24px;
  }
`;
