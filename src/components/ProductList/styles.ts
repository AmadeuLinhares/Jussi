import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: solid 1px var(--dark-grey);
`;
export const ContainerProductList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Title = styled.div`
  font-weight: 500;
`;
export const Price = styled.div`
  font-weight: bold;
  color: var(--dark-grey);
`;
export const AddCart = styled.div`
  cursor: pointer;
`;
