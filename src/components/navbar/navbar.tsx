import React, { useState } from "react";
import * as SC from './navbarStyle';

const Navbar = () => {
  const city = {
    서울: ['강남구', '노원구', '용산구', '성동구'],
    대전: ['유성구', '중구', '대덕구'],
    대구: ['수성구', '중구', '달서구'],
    부산: ['해운대구', '남구', '북구', '서구'],
    광주: ['광산구', '남구', '동구'],
    울산: ['남구', '중구', '북구'],
    인천: ['중구', '동구', '미추홀구', '연수구']
  };
  const [selectedDistrict, setSelectedDistrict] = useState('노원구');
  const [selectedCity, setSelectedCity] = useState('서울');
  const [isSelecting, setIsSelecting] = useState(false);

  const handleLocation = () => {
    setIsSelecting(true);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedDistrict('');
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setIsSelecting(false);
  };

  return (
    <SC.NavbarContainer>
      <SC.NavContainer>
				<SC.NavLogo>
        </SC.NavLogo>
        <SC.NavLocation onClick={handleLocation}>
					<img src="here.png" alt="location"/>
          
          {isSelecting ? (
            <SC.NavSelect>
              <select value={selectedCity} onChange={handleCityChange}>
                <option value="">선택</option>
                {Object.keys(city).map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {selectedCity && (
                <select value={selectedDistrict} onChange={handleDistrictChange}>
                  <option value="">선택</option>
                  {city[selectedCity].map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
              </select>
              )}
            </SC.NavSelect>
          ): (
            <SC.NavLoc onClick={() => {setIsSelecting(true)}}>
              {selectedCity && selectedDistrict ? `${selectedCity} ${selectedDistrict}`
              : '주소 선택'}
            </SC.NavLoc>)}
        </SC.NavLocation>
      </SC.NavContainer>
    </SC.NavbarContainer>
  );
};

export default Navbar;