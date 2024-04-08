import React, { useState, useEffect } from 'react';
import CheckIcon from './CheckIcon';
import * as SC from './styled';
import { SubmitBox } from '../../components/SubmitBox/SubmitBox';
import { useNavigate } from 'react-router-dom';
// import axios from "axios"
import Loading from '../../components/loading';

const IntroPage = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState({ male: false, feMale: false });
  const [age, setAge] = useState({
    age10: false,
    age2030: false,
    age40: false,
  });
  const [body, setBody] = useState({ hot: false, normal: false, cold: false });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  const genderHandler = (selectedGender) => {
    if (selectedGender === 'male') {
      setGender({ male: true, female: false });
    } else {
      setGender({ male: false, female: true });
    }
  };

  const ageHandler = (selectedAge) => {
    switch (selectedAge) {
      case 'age10':
        setAge({ age10: true, age2030: false, age40: false });
        break;
      case 'age2030':
        setAge({ age10: false, age2030: true, age40: false });
        break;
      case 'age40':
        setAge({ age10: false, age2030: false, age40: true });
        break;
      default:
        setAge({ age10: false, age2030: false, age40: false });
        break;
    }
  };

  const bodyHandler = (selectedBody) => {
    switch (selectedBody) {
      case 'hot':
        setBody({ hot: true, normal: false, cold: false });
        break;
      case 'normal':
        setBody({ hot: false, normal: true, cold: false });
        break;
      case 'cold':
        setBody({ hot: false, normal: false, cold: true });
        break;
      default:
        setBody({ hot: false, normal: false, cold: false });
        break;
    }
  };

  useEffect(() => {
    Object.keys(gender).forEach((key) => {
      if (gender[key]) {
        saveToLocal('gender', key);
      }
    });

    Object.keys(age).forEach((key) => {
      if (age[key]) {
        saveToLocal('age', key);
      }
    });

    Object.keys(body).forEach((key) => {
      if (body[key]) {
        saveToLocal('body', key);
      }
    });
  }, [gender, age, body]);

  const saveToLocal = (key, value) => {
    localStorage.setItem(key, value);
  };

  const routeHandler = () => {
    navigate('/home');
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <SC.Main>
          <SC.Section>
            <SC.Title>성별을 알려주세요</SC.Title>
            <SC.Article>
              <SC.CheckBox
                onClick={() => genderHandler('male')}
                $isClick={gender.male}
              >
                <CheckIcon $isClick={gender.male}></CheckIcon>
                <img src="/images/male.png" alt="male" />
                <SC.ContentText>남성</SC.ContentText>
              </SC.CheckBox>
              <SC.CheckBox
                onClick={() => genderHandler('female')}
                $isClick={gender.female}
              >
                <CheckIcon $isClick={gender.female}></CheckIcon>
                <img src="/images/female.png" alt="female" />
                <SC.ContentText>여성</SC.ContentText>
              </SC.CheckBox>
            </SC.Article>
          </SC.Section>
          <SC.Section>
            <SC.Title>나이를 설정해주세요</SC.Title>
            <SC.Article>
              <SC.CheckBox
                onClick={() => ageHandler('age10')}
                $isClick={age.age10}
              >
                <CheckIcon $isClick={age.age10}></CheckIcon>
                <SC.ContentText>10대</SC.ContentText>
              </SC.CheckBox>
              <SC.CheckBox
                onClick={() => ageHandler('age2030')}
                $isClick={age.age2030}
              >
                <CheckIcon $isClick={age.age2030}></CheckIcon>
                <SC.ContentText>20대-30대</SC.ContentText>
              </SC.CheckBox>
              <SC.CheckBox
                onClick={() => ageHandler('age40')}
                $isClick={age.age40}
              >
                <CheckIcon $isClick={age.age40}></CheckIcon>
                <SC.ContentText>40대 이상</SC.ContentText>
              </SC.CheckBox>
            </SC.Article>
          </SC.Section>
          <SC.Section>
            <SC.Title>체질을 설정해주세요</SC.Title>
            <SC.Article>
              <SC.CheckBox
                onClick={() => bodyHandler('hot')}
                $isClick={body.hot}
              >
                <CheckIcon $isClick={body.hot}></CheckIcon>
                <SC.ContentText>
                  더위를<br></br>많이타요
                </SC.ContentText>
              </SC.CheckBox>
              <SC.CheckBox
                onClick={() => bodyHandler('normal')}
                $isClick={body.normal}
              >
                <CheckIcon $isClick={body.normal}></CheckIcon>
                <SC.ContentText>평균</SC.ContentText>
              </SC.CheckBox>
              <SC.CheckBox
                onClick={() => bodyHandler('cold')}
                $isClick={body.cold}
              >
                <CheckIcon $isClick={body.cold}></CheckIcon>
                <SC.ContentText>
                  추위를<br></br>많이타요
                </SC.ContentText>
              </SC.CheckBox>
            </SC.Article>
          </SC.Section>
          <SubmitBox onClick={routeHandler}>완료</SubmitBox>
        </SC.Main>
      )}
    </>
  );
};

export default IntroPage;
