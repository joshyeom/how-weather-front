import React from 'react';
import * as SC from './weatherStyle';
import { Fonts } from '../../tokens/Fonts';

const Weather = ({isModal,setIsModal}) => {


	return(
		<SC.WeatherContainer>
			<SC.WeatherMain>
				<SC.ShowMore onClick={() => setIsModal(!isModal)}>
					<SC.MoreText fontStyle={Fonts['font-medium-12']}>
						<span>더보기 {">"}</span>
					</SC.MoreText>
				</SC.ShowMore>
				<SC.WeatherIcon>
					<img src="cloudy.png" alt="weatherIcon" />
				</SC.WeatherIcon>
				<SC.TemperatureText fontStyle={Fonts['font-semi-14']}>
					<SC.TemperatureCompare fontStyle={Fonts['font-regular-12']}>
						<span>체감온도 {16}</span>
						<span>°</span>
					</SC.TemperatureCompare>
					<SC.TemperatureTextBig fontStyle={Fonts['font-mont-50']}>
						<span>{15.3}</span>
						<span>°</span>
					</SC.TemperatureTextBig>
					<SC.TemperatureCompare fontStyle={Fonts['font-regular-12']}>
						<span>어제보다</span>
						<span>{0.4}</span>
						<span>°</span>
						<span>{'낮음'}</span>
					</SC.TemperatureCompare>
				</SC.TemperatureText>
				<SC.WeatherOther>
					<SC.TemperatureFind>
						<SC.TemperatureTopLast fontStyle={Fonts['font-regular-16']}>
							<span>최저</span>
							<span>{3}</span>
							<span>°</span>
						</SC.TemperatureTopLast>
						<SC.Span>/</SC.Span>
						<SC.TemperatureTopLast fontStyle={Fonts['font-regular-16']}>
							<span>최고</span>
							<span>{6}</span>
							<span>°</span>
						</SC.TemperatureTopLast>
					</SC.TemperatureFind>
					<SC.RainDust>
						<SC.RainPercent>
							<SC.RainTitle fontStyle={Fonts['font-medium-10']}>
							<span>강수확률</span>
							</SC.RainTitle>
							<SC.Percent fontStyle={Fonts['font-semi-14']}>
								<span>30%</span>
							</SC.Percent>
						</SC.RainPercent>
						<SC.Margin />
						<SC.RainPercent>
							<SC.RainTitle fontStyle={Fonts['font-medium-10']}>
							<span>미세먼지</span>
							</SC.RainTitle>
							<SC.Percent fontStyle={Fonts['font-semi-14']}>
								<span>나쁨</span>
							</SC.Percent>
						</SC.RainPercent>
					</SC.RainDust>
				</SC.WeatherOther>
			</SC.WeatherMain>
		</SC.WeatherContainer>
	);
};

export default Weather;
