//import axios from 'axios';

export const WeatherApi = async () => {
  try {
    const response = await fetch('weather-infomation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify({
        keyword: '서울시',
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

/*
export const WeatherApi = async () => {
  try {
    const response = await axios.get('/data/mock.json');
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
*/

/*
export const WeatherApi = async () => {
  try {
    const response = await axios.post(
      'https://asia-northeast3-kskim-archive.cloudfunctions.net/weather-infomation',
      {
        headers: {
          'Access-Control-Allow-Credentials': 'true',
        },
      },
      {
        keyword: '강남구',
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
*/
