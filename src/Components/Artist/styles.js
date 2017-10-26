import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  height: 700px;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;  
  box-shadow: 0 0 30px #222222;
  overflow: hidden;
  padding: 1em;
  color: white;
  background-repeat: no-repeat;
  background-position: center center;   
  background-size: cover;
  background-image: url(${props => props.photo});

  transition: flex-basis 1000ms ease-in-out;
  &:hover {
    flex-basis: 40em;
  };
  &:hover .detail {
    opacity: 1;
  };
`;

export const Detail = styled.div`
  opacity: 0;
  transition: opacity 800ms ease-in-out;
`



export const DateText = styled.div`
  margin-top: 15px;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: left;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.span`
  margin-top: 38px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: left;
  color: #ffffff;
  text-shadow: 0 2px 13px rgba(0, 0, 0, 0.77);
`;

export const Place = styled.div`
  margin-top: 15px;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: left;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Tickets = styled.div`
  margin-top: 15px;
  width: 244px;
  height: 49px;
  opacity: 0.92;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TicketsText = styled.span`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: left;
  color: ${props => props.color};
`;




export const HeartSymbol = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  margin-top: 40px;
`;

export const Heart = styled.span`
  width: 55px;
  height: 45px;
  display: inline-block;
  cursor: pointer;
  animation-duration: .45s;
  animation-timing-function: ease;
  animation-direction: alternate;
`;

export const HeartSVG = styled.svg`
  width: 100%;
  height: 100%;
  fill: transparent;
  color: transparent;
  transition: all .55s ease;
`;

export const Layer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  width: 55px;
  height: 45px;
  display: inline-block;
  transform: scale(1);
  pointer-events: none;
`;

export const LayerSVG = styled.svg`
  width: 100%;
  height: 100%;
  fill: transparent;
  color: transparent;  
`;

export const HackyBox =  styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  &: checked ~ .heart {
    animation-name: love;
  }
  :checked ~ .layer {
    transform: scale(1);
    opacity: 1;
    transition: transform .65s ease, opacity .9s ease;
    z-index: 1;
  }
  :checked ~ .layer svg {
    fill: #ff0d0d;
    color: #ff0d0d;
    transition: color .4s ease .2s;
  }
  :checked ~ .layer .animatedPath {
    stroke-dashoffset: 0;
    transition: all .9s ease;
  }
`;

export const AnimatedPath = styled.path`
  stroke-dashoffset: 156;
  stroke-dasharray: 156;
  stroke-width: 4;
`;




export const Arrow = styled.span`
  color: ${props => props.color};
  margin-left: 10px;
`;