import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Dot1frame = keyframes`
    3%,
    97% {
      width: 160px;
      height: 100px;
      margin-top: -50px;
      margin-left: -80px;
    }
    30%,
    36% {
      width: 80px;
      height: 120px;
      margin-top: -60px;
      margin-left: -40px;
    }
    63%,
    69% {
      width: 40px;
      height: 80px;
      margin-top: -40px;
      margin-left: -20px;
    }
`;

const Dot2frame = keyframes`

    3%,
    97% {
      width: 150px;
      height: 90px;
      margin-top: -45px;
      margin-left: -75px;
    }
    30%,
    36% {
      width: 70px;
      height: 96px;
      margin-top: -48px;
      margin-left: -35px;
    }
    63%,
    69% {
      width: 32px;
      height: 60px;
      margin-top: -30px;
      margin-left: -16px;
    }
  
`;

const Dot3frame = keyframes`
    3%,
    97% {
      width: 40px;
      height: 20px;
      margin-top: 50px;
      margin-left: -20px;
    }
    30%,
    36% {
      width: 8px;
      height: 8px;
      margin-top: 49px;
      margin-left: -5px;
      border-radius: 8px;
    }
    63%,
    69% {
      width: 16px;
      height: 4px;
      margin-top: -37px;
      margin-left: -8px;
      border-radius: 10px;
    }
`;

const Loader = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background: #e45447;
    z-index: 99999; 
`;

const Dot = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    width: 160px;
    height: 100px;
    margin-top: -50px;
    margin-left: -80px;
    border-radius: 5px;
    background-color: #1e3f57;
    -webkit-transform-type: preserve-3d;
    animation: ${Dot1frame} 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;

    &:nth-child(2) {
    z-index: 11;
    width: 150px;
    height: 90px;
    margin-top: -45px;
    margin-left: -75px;
    border-radius: 3px;
    background-color: #90acd1;
    animation-name: ${Dot2frame};
  }

    &:nth-child(3) {
    z-index: 12;
    width: 40px;
    height: 20px;
    margin-top: 50px;
    margin-left: -20px;
    border-radius: 0 0 5px 5px;
    background-color: #ffff;
    animation-name: ${Dot3frame} ;
  }
    
`;

const Preloader = () => {
  return ( 
    <Loader>
      <Dot />
      <Dot />
      <Dot />
    </Loader>
   );
}
 
export default Preloader;




