import styled from 'styled-components';
import { Colors } from '../../tokens/Colors';

export const CardList = styled.div`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 390px;
  background: ${Colors.BG02};
  border-radius: 8px 8px 0 0;
  box-sizing: border-box;

  @media only screen and (max-width: 390px) {
    width: 100%;
  }
`;

export const Recommend = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Clothes = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Tip = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Accessory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Line = styled.div`
  border-left: 1px solid ${Colors.line02};
  height: 144px;
`;
