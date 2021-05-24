import styled from 'styled-components';
import { ContainerComponent } from '../Container';

export const Container = styled(ContainerComponent)`
  background-color: var(--black);
  min-height: 80px;
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  width: 142px;
  height: 27px;
  cursor: pointer;
`;
export const Social = styled.div`
  width: 130px;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
  }
`;
