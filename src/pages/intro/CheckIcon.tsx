import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../tokens/Colors';

const Box = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: ${({ isClick }) =>
    isClick ? Colors.main01 : Colors.line03};

  position: absolute;
  top: 5px;
  right: 5px;
  transition: 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckIcon = ({ isClick }) => {
  return (
    <Box isClick={isClick}>
      <svg
        width="11"
        height="8"
        viewBox="0 0 11 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9142 2.00003L5.70714 7.20714C5.31661 7.59766 4.68345 7.59766 4.29292 7.20714L0.585815 3.50003L2.00003 2.08582L5.00003 5.08582L9.50003 0.585815L10.9142 2.00003Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};

export default CheckIcon;
