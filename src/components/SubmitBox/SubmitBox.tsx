import { styled } from 'styled-components';
import { Colors } from '../../tokens/Colors';
import { Fonts } from '../../tokens/Fonts';

export const Button = styled.button`
  cursor: pointer;
  width: calc(100% - 40px);
  margin: 0 auto;
  background-color: ${Colors.line03};
  border: none;
  height: 59px;
  border-radius: 6px;
  color: white;
  transition: 0.2s ease-in-out;
  ${Fonts['font-semi-18']};

  &:hover {
    background-color: ${Colors.main02};
  }
`;

export const SubmitBox = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
