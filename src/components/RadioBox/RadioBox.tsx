/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Colors } from '../../tokens/Colors';
import { Fonts } from '../../tokens/Fonts';

const Container = styled.section`
  background-color: ${Colors.BG};
  padding: 24px 26px;
  display: flex;
  flex-direction: ${({ $column }) => ($column ? 'column' : 'row')};
  gap: ${({ $column }) => ($column ? '12px' : '36px')};
  border-radius: 6px;
`;

const ItemBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0 8px;
  cursor: pointer;
  padding-bottom: ${({ $body, $lastItem }) => !$lastItem && $body && '12px'};
  border-bottom: ${({ $body }) => $body && `1px solid ${Colors.line01}`};
  ${({ $lastItem }) => $lastItem && 'border-bottom: none;'}
`;

const Label = styled.label`
  cursor: pointer;
  font-size: ${Fonts['font-medium-14'].fontSize};
  font-weight: ${Fonts['font-medium-14'].fontWeight};
  line-height: ${Fonts['font-medium-14'].lineHeight};
  font-family: ${Fonts['font-medium-14'].fontFamily};
`;

const RadioBox = ({ list, category, column, value}) => {
  const [selectedItems, setSelectedItems] = useState([list]);

  const handleItemToggle = (item) => {
    const isSelected = selectedItems.includes(item);

    if (!isSelected) {
      setSelectedItems([item]);
    }
  };

  const saveToLocal = (category, value) => {
    localStorage.setItem(category, value);
};

  return (
    <Container $column={column}>
      {list
        ? list.map((item, idx) => (
            <ItemBox
              key={idx}
              onClick={() => {
                handleItemToggle(item);
                saveToLocal(category, value[idx])
              }}
              $body={category === 'body' && true}
              $lastItem={idx === list.length - 1}
            >
              <div
                onKeyDown={(e) => {
                  /* 키보드 이벤트 처리 */
                  if (e.key === 'Enter') {
                    handleItemToggle(item);
                  }
                }}
              >
                {selectedItems.includes(item) ? (
                  <img src="images/icon_radio_checed.png" alt="icon" />
                ) : (
                  <img src="images/icon_radio_uncheced.png" alt="icon" />
                )}
              </div>
              <Label htmlFor={item}>
                {item}
                {/* <InnerCircle/> */}
              </Label>
            </ItemBox>
          ))
        : null}
    </Container>
  );
};

export default RadioBox;
