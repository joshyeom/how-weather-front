import styled, { css } from 'styled-components';

export const WeatherContainer = styled.div`
  width: 358px;
  margin: 0 16px 16px 16px;
  height: 160px;
  background-color: rgba(255, 255, 255, 1);
  color: black;
  border-radius: 6px;
  box-shadow: 0px 0px 9px 2px rgba(238, 240, 243, 1);
`;

export const WeatherMain = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
`;

export const ShowMore = styled.div`
  height: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const MoreText = styled.div`
  position: relative;
  top: 5px;
  right: 3px;
  width: 50px;
  height: 20px;
  text-align: center;
  ${(props) =>
    props.fontStyle &&
    css`
      font-size: ${props.fontStyle.fontSize};
      font-family: ${props.fontStyle.fontFamily};
      font-weight: ${props.fontStyle.fontWeight};
      line-height: ${props.fontStyle.lineHeight};
    `}
`;

export const WeatherIcon = styled.div`
  position: relative;
  width: 73px;
  height: 53px;
  top: -5px;
  left: 30px;
  opacity: 0.7;
`;

export const TemperatureText = styled.div`
  position: relative;
  float: left;
  top: -25px;
  width: 109px;
  height: 90px;
  left: 60px;
  bottom: 10px;
  ${(props) =>
    props.fontStyle &&
    css`
      font-size: ${props.fontStyle.fontSize};
      font-family: ${props.fontStyle.fontFamily};
      font-weight: ${props.fontStyle.fontWeight};
      line-height: ${props.fontStyle.lineHeight};
    `}
`;

export const TemperatureTextBig = styled.div`
  position: relative;
  top: 10px;
  width: 109px;
  height: 40px;
  ${(props) =>
    props.fontStyle &&
    css`
      font-size: ${props.fontStyle.fontSize};
      font-family: ${props.fontStyle.fontFamily};
      font-weight: ${props.fontStyle.fontWeight};
      line-height: ${props.fontStyle.lineHeight};
    `}
`;

export const TemperatureCompare = styled.div`
  margin-bottom: 3px;
  text-align: center;
  ${(props) =>
    props.fontStyle &&
    css`
      font-size: ${props.fontStyle.fontSize};
      font-family: ${props.fontStyle.fontFamily};
      font-weight: ${props.fontStyle.fontWeight};
      line-height: ${props.fontStyle.lineHeight};
    `}
`;

export const WeatherOther = styled.div`
  position: relative;
  float: left;
  width: 109px;
  height: 70px;
  top: -25px;
  left: 70px;
  bottom: 10px;
  border-left: 1px solid rgba(102, 105, 111, 1); // 선의 두께와 색상 조절
  padding-left: 20px; // 선과 요소 사이의 간격 조절
`;

export const TemperatureFind = styled.div`
  width: 103px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const TemperatureTopLast = styled.div`
  float: left;
  margin-right: 5px;
  ${(props) =>
    props.fontStyle &&
    css`
      font-size: ${props.fontStyle.fontSize};
      font-family: ${props.fontStyle.fontFamily};
      font-weight: ${props.fontStyle.fontWeight};
      line-height: ${props.fontStyle.lineHeight};
    `}
`;

export const Span = styled.span`
  margin-right: 5px;
  float: left;
  color: rgba(102, 105, 111, 1);
`;

export const RainDust = styled.div`
  position: relative;
  width: 121px;
  height: 56px;
`;

export const Margin = styled.div`
  float: left;
  width: 9px;
  height: 100%;
`;

export const RainPercent = styled.div`
  float: left;
  width: 56px;
  height: 56px;
  background-color: rgba(246, 247, 250, 1);
  border-radius: 6px;
`;

export const RainTitle = styled.div`
  float: bottom;
  margin-top: 6px;
  color: rgba(102, 105, 111, 1);
  text-align: center;
  ${(props) =>
    props.fontStyle &&
    css`
      font-size: ${props.fontStyle.fontSize};
      font-family: ${props.fontStyle.fontFamily};
      font-weight: ${props.fontStyle.fontWeight};
      line-height: ${props.fontStyle.lineHeight};
    `}
`;

export const Percent = styled.div`
  margin-top: 6px;
  text-align: center;
  color: rgba(88, 50, 238, 1);
  ${(props) =>
    props.fontStyle &&
    css`
      font-size: ${props.fontStyle.fontSize};
      font-family: ${props.fontStyle.fontFamily};
      font-weight: ${props.fontStyle.fontWeight};
      line-height: ${props.fontStyle.lineHeight};
    `}
`;
