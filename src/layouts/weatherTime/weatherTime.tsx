import { useEffect, useRef } from 'react';
import { WEATHER_IMAGE } from '../../utils/constant';
import ApexCharts from 'apexcharts';
import * as SC from './styled';

const WeatherTime = ({ weather }) => {
  const currentDate = new Date();
  const weatherCurrent = weather?.filter(
    (item, index) =>
      index >= currentDate.getHours() && index <= currentDate.getHours() + 23
  );
  //const weatherCurrent = weather?.filter((item, index) => index < 24);
  const weatherTemp = weatherCurrent?.map((item) => item.degree);
  const weatherTime = weatherCurrent?.map((item) => item.time);
  const weatherCloud = weatherCurrent?.map((item) => item.weather);

  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        {
          name: '기온',
          data: weatherTemp,
        },
      ],
      chart: {
        height: 160,
        width: weatherCurrent.length * 40,
        type: 'bar',
        toolbar: {
          show: false,
        },
        fontFamily: 'Pretendard',
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + '°';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        categories: weatherTime,
        position: 'bottom',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + '°';
          },
        },
      },
      title: {
        text: '시간별 날씨',
        floating: true,
        offsetY: 0,
        align: 'left',
        style: {
          color: '#444',
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, options);

    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <SC.WeatherTime>
      <SC.WeatherChart ref={chartRef} />
      <SC.WeatherCloud>
        {weatherCloud.map((cloud, index) => (
          <SC.WeatherImage
            key={index}
            src={WEATHER_IMAGE[cloud]}
            alt={`${cloud} 이미지`}
          />
        ))}
      </SC.WeatherCloud>
    </SC.WeatherTime>
  );
};

export default WeatherTime;
