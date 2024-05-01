import styled from 'styled-components';

export const Header = styled.div`
    width: calc(100% - 32px);
    height: 24px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button`
    display: flex;

    border: none;
    background-color: unset;
    cursor: pointer;
`;

export const Gap = styled.div`
    width: 22px;
`;
export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 0 4px;
    font-size: 18px;
`;
