import TextStrong from '../../components/text/textStrong.jsx';
import TextLink from '../../components/text/textLink.jsx';
import CardItem from '../../components/card/cardItem.jsx';
import BoxAccessory from '../../components/box/boxAccessory.jsx';
import { CLOTHES_IMAGE, WEATHER_IMAGE } from '../../utils/constant.js';
import * as SC from './styled.jsx';

const RecommendClothes = ({ weather }) => {
  const season = (temp) => {
    if (temp >= 22) {
      return '여름';
    } else if (temp >= 16) {
      return '봄';
    } else if (temp >= 11) {
      return '가을';
    } else {
      return '겨울';
    }
  };

  console.log(localStorage.getItem('gender'));

  const info = {
    성별: localStorage.getItem('gender') === 'male' ? '남성' : '여성',
    나이: '10대',
    체질: '평균',
    날씨: weather.today.today_weather,
    온도: season(weather.today.temp.replace('°', '')),
    미세먼지: weather.today.pm10,
    자외선: weather.today.uv,
  };

  return (
    <SC.CardList>
      <SC.Recommend>
        <TextStrong>오늘의 추천 룩</TextStrong>
        <TextLink to="/recommend">{'더보기 >'}</TextLink>
      </SC.Recommend>
      <SC.Clothes>
        {info.온도 === '여름' ? null : (
          <>
            <CardItem
              src={CLOTHES_IMAGE[info.성별].OUTER}
              alt="외투 이미지"
              info={info}
              item="OUTER"
            />
            <SC.Line />
          </>
        )}
        <CardItem
          src={CLOTHES_IMAGE[info.성별].TOP}
          alt="상의 이미지"
          info={info}
          item="TOP"
        />
        <SC.Line />
        <CardItem
          src={CLOTHES_IMAGE[info.성별].BOTTOM}
          alt="하의 이미지"
          info={info}
          item="BOTTOM"
        />
      </SC.Clothes>
      <TextStrong>오늘의 날씨 팁</TextStrong>
      <SC.Tip>
        <SC.Accessory>
          <CardItem
            src={WEATHER_IMAGE[info.날씨]}
            info={info}
            alt={`${info.날씨} 이미지`}
          />
          <BoxAccessory info={info} />
        </SC.Accessory>
      </SC.Tip>
    </SC.CardList>
  );
};

export default RecommendClothes;
