import * as SC from "./style.js";
import * as DD from "./codiData.js";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecommendPage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 2,
    };
    return (
    <SC.Base>
            <SC.Title>오늘의 추천 코디</SC.Title>
            <StyledSlider {...settings}>
                {DD.codiRecommend.map((it)=>(
                    <SC.codiImgbox key={it.id}>
                        <SC.ImgSize src={it.img} alt="코디 사진"/>
                    </SC.codiImgbox>
                ))}
            </StyledSlider>
            <SC.Title>오늘의 추천 아이템</SC.Title>
            <SC.SliderSmall>{DD.dummyImagesmall.map((it)=>(
                <SC.ImgBox key={it.id}>
                   <SC.Astyle href ={it.link}>
                    <SC.ImgSize src={it.img}/>
                    <SC.TextBox>{it.title}</SC.TextBox>
                   </SC.Astyle> 
                </SC.ImgBox>
            ))}
            </SC.SliderSmall>
            <SC.Title>추천 쇼핑몰</SC.Title>
                {DD.shopLink.map((it)=>(
                    <SC.ShopBox key={it.id}>
                        <SC.ShopA href={it.link}>
                            <SC.ImgSize src={it.img} alt={it.title}/>
                        </SC.ShopA>
                    </SC.ShopBox>
                ))}
    </SC.Base>
    )
}

export default RecommendPage;

const StyledSlider = styled(Slider)`
    .slick-slide{
        margin-right : 10px;
    }
    .slick-track{
        display: flex;
        gap: 0.1rem;
    }
    overflow: hidden;
    width: 400px;
    height: 190px;
    margin-left : 16px;
    *:focus{
        outline:none;
    }
`;
