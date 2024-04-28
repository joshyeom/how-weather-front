import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Colors } from '../../tokens/Colors';
import { Fonts } from '../../tokens/Fonts';
import { RadioBoxProps } from 'types/types';

const Container = styled.section<{column: boolean}>`
  background-color: ${Colors.BG};
  padding: 24px 26px;
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  gap: ${({ column }) => (column ? '12px' : '36px')};
  border-radius: 6px;
`;

const ItemBox = styled.div<{body: boolean, lastItem: boolean}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0 8px;
  cursor: pointer;
  padding-bottom: ${({ body, lastItem }) => !lastItem && body && '12px'};
  border-bottom: ${({ body }) => body && `1px solid ${Colors.line01}`};
  ${({ lastItem }) => lastItem && 'border-bottom: none;'}
`;

const Label = styled.label`
  cursor: pointer;
  font-size: ${Fonts['font-medium-14'].fontSize};
  font-weight: ${Fonts['font-medium-14'].fontWeight};
  line-height: ${Fonts['font-medium-14'].lineHeight};
  font-family: ${Fonts['font-medium-14'].fontFamily};
`;



const RadioBox = ({ list, category, column, value}: RadioBoxProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(list);

  const handleItemToggle = (item: string) => {
    const isSelected = selectedItems.includes(item);

    if (!isSelected) {
      setSelectedItems([item]);
    }
  };

  const saveToLocal = (category: string, value: string) => {
    localStorage.setItem(category, value);
};

  return (
    <Container column={column}>
      {list
        ? list.map((item, idx) => (
            <ItemBox
              key={idx}
              onClick={() => {
                handleItemToggle(item);
                saveToLocal(category[idx], value[idx])
              }}
              body={category === 'body' && true}
              lastItem={idx === list.length - 1}
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
              </Label>
            </ItemBox>
          ))
        : null}
    </Container>
  );
};

export default RadioBox;
