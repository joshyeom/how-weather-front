import { Colors } from '../../tokens/Colors';
import { Fonts } from '../../tokens/Fonts';
import styled from 'styled-components';

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
`;

export const Item = styled.p`
  background: ${Colors['main02-10']};
  padding: 4px 0;
  border-radius: 9999px;
  color: ${Colors.main02};
  ${Fonts['font-medium-10']};
  text-align: center;
`;

export const Clothes = styled.p`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
