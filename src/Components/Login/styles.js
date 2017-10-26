import styled, { keyframes } from 'styled-components';
import earPhones from '../../assets/images/earphones.jpeg'

const fadeInDown = keyframes`
from {
  transform: translate3d(0, -1000px, 0);
}

to {
  transform: none;
}
`;

const fadeInDownForm = keyframes`
from {
  transform: translate3d(0, -82px, 0);
}

to {
  transform: none;
}
`;

export const Container = styled.div`  
  background-image: url(${earPhones});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FormContainer = styled.div`
  position: absolute;
  top: 200px;
  right: 178px;
`;

export const Form = styled.div`
	width: 402px;
	height: 265px;
	opacity: 0.85;
	border-radius: 9px;
	background-color: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  margin-top: 13px;
`;

export const FormAnimated = styled.div`
  width: 402px;
  height: 265px;
  opacity: 0.85;
  border-radius: 9px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  margin-top: 13px;

  animation: ${fadeInDownForm} 1s;
`;

export const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  width: 100%
`;

export const Label = styled.label`
  position: relative;
  opacity: 0.6;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.7px;
  text-align: center;
  color: #000000;
  top: -85px;
  left: 0px;  
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  border: none;
  border-bottom: solid 2px #000000;
  outline: none;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 2.3px;
  text-align: left;
  color: #000000;
  transition: all 0.2s ease-in-out;
  ::-webkit-input-placeholder {
    font-size: 16px;
  }
`;

export const Button = styled.div`
  width: 204px;
  height: 59px;
  border-radius: 6px;
  background-color: #060606;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;  
  cursor: pointer;
`;

export const ButtonText = styled.span`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
`;

export const ErrorContainer = styled.div`
  width: 483px;
  height: 82px;
  border-radius: 9px;
  background-color: #fe3b3b;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;   

  animation: ${fadeInDown} 1s ;
`

export const ErrorText = styled.div`
  opacity: 0.6;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1.8px;
  text-align: center;
  color: white;
`

export const Title = styled.span`
  font-size: 44px;
  letter-spacing: 3.7px;
  text-align: center;
  color: #000000;
`;

export const TitleBold = styled.span`
  font-size: 44px;
  letter-spacing: 3.7px;
  text-align: center;
  color: #000000;
  font-weight: bold;
`;



