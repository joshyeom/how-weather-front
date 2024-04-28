import { Colors } from '../../tokens/Colors';
import styled from 'styled-components';

export const WeatherTime = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 390px;
  max-width: 390px;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: ${Colors['line01']};
    border-radius: 6px;
  }
`;

export const WeatherChart = styled.div`
  width: 100%;
  height: 200px;
`;

export const WeatherCloud = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10.8px;
  margin-left: 16px;
  top: 150px;
  left: 10px;
`;

export const WeatherImage = styled.img`
  width: 28px;
  height: 28px;
`;
