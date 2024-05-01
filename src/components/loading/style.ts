import styled, { keyframes } from 'styled-components';

const blurAnimation = keyframes`
 0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }

`;

export const LoadingWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${blurAnimation} 2s linear infinite;
`;
