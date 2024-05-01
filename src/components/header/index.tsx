import Navbar from '../navbar/navbar';

import * as S from './style';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  const handleMoveSetting = () => {
    navigate('/setting');
  };


  const onHeaderName = () => {
    switch (location.pathname) {
      case '/home':
        return (
          <>
            <Navbar />
          </>
        );
      case '/recommend':
        return '추천 코디';
      case '/setting':
        return '환경 설정';
      default:
        return;
    }
  };


  return location.pathname === '/' ? null : (
    <S.Header>
      {location.pathname !== '/home' ? (
        <S.Button onClick={handleBack}>
          <img src="images/icon_back.png" alt="back" />
        </S.Button>
      ) : (
        <S.Gap></S.Gap>
      )}
      <S.Title>{onHeaderName()}</S.Title>
      {location.pathname === '/home' ? (
        <S.Button onClick={handleMoveSetting}>
          <img src="images/icon_gear.png" alt="gear" />
        </S.Button>
      ) : (
        <S.Gap></S.Gap>
      )}
    </S.Header>
  );
};

export default Header;
