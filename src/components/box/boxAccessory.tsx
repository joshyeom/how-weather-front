import { WEATHER_TEXT } from '../../utils/constant';
import TextP from '../text/textP';
import * as SC from './styled';

const BoxAccessory = ({ info }) => {
  return (
    <SC.Box>
      {info.미세먼지 === '나쁨' ? <TextP>마스크 챙겨주세요!</TextP> : null}
      {info.자외선 === '나쁨' ? <TextP>선크림 챙겨주세요!</TextP> : null}
      <TextP>{WEATHER_TEXT[info.날씨]}</TextP>
    </SC.Box>
  );
};

export default BoxAccessory;
