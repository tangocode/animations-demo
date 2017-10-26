import styled, { keyframes } from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100vh;
	background-image: linear-gradient(to bottom, #121212, #343434);
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);  
  display: flex;
  flex-direction: column;
`

export const TopContent = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;  
  justify-content: space-around;
  align-items: center;
`

export const Artists = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`

export const FilterContainer = styled.div`
`;

export const FilterTitle = styled.div`
  font-size: 22px;
  letter-spacing: 1.8px;
  text-align: center;
  color: #ffffff;
  width: 100%;
  display: flex;
`;

export const FilterValue = styled.div`
  font-size: 27px;
  font-weight: 500;
  letter-spacing: 2.3px;
  text-align: center;
  color: #ffffff;
`;

export const FilterDivider = styled.div`
  margin-top: 10px;
  width: 263px;
  height: 1px;
  border: solid 1px #ffffff;
`;

export const BallContainer = styled.div`
  width: 342px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -171px;
`;

const motionBlur = keyframes`
  0% {
    left: 0;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  5% {
    left: 0;
    -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
    -webkit-transform: scaleX(0.85);
            transform: scaleX(0.85);
  }
  25% {
    box-shadow: -20px 0 15px -10px rgba(255, 255, 255, 0.4);
    -webkit-transform: scaleX(1.05) skewX(-3deg);
            transform: scaleX(1.05) skewX(-3deg);
  }
  50% {
    left: 300px;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    -webkit-transform: scaleX(1) skewX(0deg);
            transform: scaleX(1) skewX(0deg);
  }
  55% {
    left: 300px;
    -webkit-transform-origin: 100% 0;
            transform-origin: 100% 0;
    -webkit-transform: scaleX(0.9);
            transform: scaleX(0.9);
  }
  75% {
    box-shadow: 20px 0 15px -10px rgba(255, 255, 255, 0.4);
    -webkit-transform: scaleX(1.05) skewX(3deg);
            transform: scaleX(1.05) skewX(3deg);
  }
  100% {
    left: 0px;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    -webkit-transform: scaleX(1) skewX(0deg);
            transform: scaleX(1) skewX(0deg);
  }
`;

export const Ball = styled.div`
  width: 42px;
  height: 42px;
  background-color: #ffffff;
  position: absolute;
  border-radius: 100%;
  top: 50%;
  margin-top: -21px;
  animation: ${motionBlur} 4s ease-in-out infinite;
`;

export const Arrow = styled.span`
  color: white;
  float: right;
  margin-top: -20px;
  cursor: pointer
`;
