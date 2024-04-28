import React from 'react';
import * as SC from './styled'
import RadioBox from '../../components/RadioBox/RadioBox';
import { SubmitBox } from "../../components/SubmitBox/SubmitBox";
import { useNavigate } from 'react-router-dom';


const SettingPage = () => {
    const navigate = useNavigate()


    
    const routeHandler = () => {
        navigate('/home');
    }





    return (
            <SC.Main>
                <SC.Section>
                    <SC.Title>성별</SC.Title>
                    <RadioBox list={["남성", "여성"]} value={["male", "female"]} category="gender"></RadioBox>
                </SC.Section>
                <SC.Section>
                    <SC.Title>나이</SC.Title>
                    <RadioBox list={["10대", "20-30대", "40대 이상"]} value={["age10", "age2030", "age40"]} category="age"></RadioBox>
                </SC.Section>
                <SC.Section>
                    <SC.Title>체질</SC.Title>
                    <RadioBox list={["더위를 많이타요", "평균", "추위를 많이타요"]} value={["hot", "normal", "cold"]} category="body" column={true}></RadioBox>
                </SC.Section>
                <SubmitBox onClick={routeHandler}>완료</SubmitBox>
            </SC.Main>
    );
};

export default SettingPage;
