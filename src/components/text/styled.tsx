import { Colors } from '../../tokens/Colors';
import { Fonts } from '../../tokens/Fonts';
import styled from 'styled-components';

export const Strong = styled.strong`
  color: ${Colors.br};
  ${Fonts['font-semi-18']};
`;

export const Span = styled.span`
  color: ${Colors.br};
  ${Fonts['font-medium-14']};
  text-align: center;
`;

export const P = styled.p`
  color: ${Colors.br};
  ${Fonts['font-medium-12']};
`;

export const Link = styled.p`
  color: ${Colors.gr01};
  ${Fonts['font-medium-12']};
`;
