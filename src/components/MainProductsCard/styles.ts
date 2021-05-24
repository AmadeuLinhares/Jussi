import styled from 'styled-components';

export const Container = styled.div`
    width: 209px;
    height: 271px;
    padding: 35px;
    border-radius: 8px;
    display: grid;
    row-gap: 10px;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
`;
export const ContainerPicture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 134px;
        width: 129px;
    }
`;
export const ContainerButton = styled.button`
    width: 160px;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--pink-jussi);
    border: solid 1px var(--pink-jussi);
    padding: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`;
