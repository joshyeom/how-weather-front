import { Outlet } from 'react-router-dom';

import Header from '../header';

import * as S from './style';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <Header />
      <Outlet />
    </S.LayoutWrapper>
  );
};

export default Layout;
