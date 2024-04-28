import { Colors } from '../../tokens/Colors';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 240px;
  height: 60px;
  background: ${Colors.BG};
  border-radius: 4px;
`;
