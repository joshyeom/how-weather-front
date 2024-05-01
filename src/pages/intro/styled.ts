import { styled } from 'styled-components';
import { Colors } from '../../tokens/Colors';
import { Fonts } from '../../tokens/Fonts';

export const Main = styled.main`
  max-width: 390px;
  margin: 0 auto;
  display: flex;
  gap: 50px 0;
  flex-direction: column;
  padding: 20px 0;
`;

export const Section = styled.section`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Title = styled.h1`
  font-size: ${Fonts['font-semi-20'].fontSize};
  font-family: ${Fonts['font-semi-20'].fontFamily};
  line-height: ${Fonts['font-semi-20'].lineHeight};
  font-weight: ${Fonts['font-semi-20'].fontWeight};
`;

export const Article = styled.article`
  display: flex;
  gap: 20px;
`;

export const CheckBox = styled.button<{isClick: boolean}>`
  width: 106px;
  height: 106px;
  background-color: ${({ isClick }) =>
    isClick ? Colors['main02-10'] : Colors.line01};
  border: ${({ isClick }) =>
    isClick ? `2px solid ${Colors.main02}` : `2px solid ${Colors.line03}`};
  border-radius: 6px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & span {
    color: ${({ isClick }) => (isClick ? Colors['main02'] : Colors.gr01)};
  }
`;

export const SubmitBox = styled.button`
  background-color: ${Colors.line01};
  border: none;
  width: 358px;
  height: 59px;
  border-radius: 6px;
  color: white;
`;

export const ContentText = styled.span`
  font-family: ${Fonts['font-semi-16'].fontFamily};
  font-size: ${Fonts['font-semi-16'].fontSize};
  font-weight: ${Fonts['font-semi-16'].fontWeight};
  line-height: ${Fonts['font-semi-16'].lineHeight};
`;
