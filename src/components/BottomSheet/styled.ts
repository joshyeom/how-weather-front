import { styled } from 'styled-components';
import { Colors } from '../../tokens/Colors';
// import { Space } from "../../tokens/"

export const Main = styled.main`
  display: ${({ isModal }) => (isModal ? 'flex' : 'none')};
  max-width: 390px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  border-radius: 10px;
  background-color: white;
  z-index: 10;
  width: 100vw;
  height: 80vh;
  transition: 0.3s ease-in-out;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1``;

export const CloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  right: 5%;
`;

export const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Category = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const Line = styled.div`
  width: 90%;
  height: 2px;
  background-color: ${Colors.line01};
  margin-bottom: 10px;
`;

export const CategoryText = styled.span``;

export const DayList = styled.ul`
  width: 100%;
`;

export const DayWeather = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const DayBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Day = styled.span``;

export const Date = styled.span``;

export const TimeBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Morning = styled.div``;

export const AfterNoon = styled.div``;

export const TempBox = styled.article``;

export const Lowest = styled.span`
  color: ${Colors.main01};
`;

export const Highest = styled.span`
  color: ${Colors.red01};
`;
