import ReactDOM from 'react-dom';
import Filter from './Filter';
import * as SC from './styled';
import { weatherData } from './weekWeather';
// import { useState } from "react";

const BottomSheet = ({ isModal, setIsModal }) => {
  // const dataWeather = useState(weatherData)
  const modalRoot = document.getElementById('modal-root');

  return ReactDOM.createPortal(
    <>
      <Filter isModal={isModal} />
      <SC.Main isModal={isModal}>
        <SC.Header onClick={() => setIsModal(!isModal)}>
          <SC.Title>주간날씨</SC.Title>
          <SC.CloseButton>X</SC.CloseButton>
        </SC.Header>
        <SC.Section>
          <SC.Category>
            <SC.CategoryText>날짜</SC.CategoryText>
            <SC.CategoryText>오전</SC.CategoryText>
            <SC.CategoryText>오후</SC.CategoryText>
            <SC.CategoryText>최저/최고기온</SC.CategoryText>
          </SC.Category>
          <SC.Line />
          <SC.DayList>
            {weatherData
              ? weatherData.map((data) => (
                  <SC.DayWeather key={data.date}>
                    <SC.DayBox>
                      <SC.Day>{data.day}</SC.Day>
                      <SC.Date>{data.date}</SC.Date>
                    </SC.DayBox>
                    <SC.Morning>{data.morning}</SC.Morning>
                    <SC.AfterNoon>{data.afternoon}</SC.AfterNoon>
                    <SC.TempBox>
                      <SC.Lowest>{data.lowest}</SC.Lowest> /
                      <SC.Highest>{data.highest}</SC.Highest>
                    </SC.TempBox>
                  </SC.DayWeather>
                ))
              : null}
          </SC.DayList>
        </SC.Section>
      </SC.Main>
    </>,
    modalRoot
  );
};

export default BottomSheet;
