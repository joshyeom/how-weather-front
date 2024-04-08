import { useEffect, useState } from 'react';
import axios from 'axios';


const WeatherAPI = () => {
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {

		const fetchWeatherApi = async () => {
			const response =  await axios.post('/api/weather-infomation',
			{
				keyword: "서울시"
			}).catch((err) => {
					console.log(err)
			});

			if (response.data) {
				setWeatherData(response.data);
			} else {
				console.err("Failed to fetch");
			}
		};

		fetchWeatherApi();
		console.log(weatherData);
}, []);
};

export default WeatherAPI;