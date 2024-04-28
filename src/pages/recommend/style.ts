import styled from 'styled-components';
import { Fonts } from '../../tokens/Fonts';

export const Base = styled.div`
  max-width: 390px;
`;
export const Top = styled.div`
  position: relative;
  height: 50px;
`;
export const BtnBack = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  background-image: url(images/btn_back.png);
  width: 18px;
  height: 18px;
  background-position: center;
  text-indent: -9999px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  margin: 0 16px;
`;
export const HeaderTitle = styled.div`
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translate(-50%, 0);
  ${Fonts['font-semi-18']};
`;
export const codiImgbox = styled.div`
  width: 142px;
  height: 190px;
`;
export const ImgSize = styled.img`
  width: 100%;
  height: auto;
`;
export const Title = styled.div`
  fonst-size: 18px;
  font-weight: 600;
  margin: 30px 16px 15px 16px;
  padding-top: 10px;
`;
export const SlickSlider = styled.div`
  height: 192px;
`;
export const SliderSmall = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin: 0 16px;
`;
export const ImgBox = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;
export const TextBox = styled.div`
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const Astyle = styled.a`
  color: inherit;
  text-decoration: none;
  ${Fonts['font-semi-14']};
`;
export const ShopBox = styled.div`
  width: calc(100% - 32px);
  height: 80px;
  margin: 10px auto;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
export const ShopA = styled.a`
  position: relative;
`;
