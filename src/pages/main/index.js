import React, { useState, useEffect } from 'react';
import RecommendClothes from '../../layouts/recommendClothes/recommendClothes';
import Weather from '../../components/weather/weather';
import WeatherTime from '../../layouts/weatherTime/weatherTime';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import axios from 'axios';

const MainPage = () => {
  const [weather, setWeather] = useState({
    mock: null,
    info: null,
  });
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('api/weather-infomation', {
          keyword: '서울시',
        });
        setWeather((prev) => ({
          ...prev,
          info: response.data,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await axios.get('/data/mock.json');
        setWeather((prev) => ({
          ...prev,
          mock: response.data,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    fetchData2();
  }, []);

  return (
    <>
      <Weather isModal={isModal} setIsModal={setIsModal} />
      {weather.mock && <WeatherTime weather={weather.mock} />}
      {weather.info && <RecommendClothes weather={weather.info} />}
      <BottomSheet isModal={isModal} setIsModal={setIsModal}></BottomSheet>
    </>
  );
};

export default MainPage;
