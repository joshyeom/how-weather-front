import { styled } from 'styled-components';
import { Fonts } from '../../tokens/Fonts';

export const Main = styled.main`
  height: 100%;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px 0;
`;

export const Title = styled.h1`
  font-size: ${Fonts['font-semi-16'].fontSize};
  font-family: ${Fonts['font-semi-16'].fontFamily};
  font-weight: ${Fonts['font-semi-16'].fontWeight};
  line-height: ${Fonts['font-semi-16'].lineHeight};
`;
