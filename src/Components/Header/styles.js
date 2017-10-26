import styled from 'styled-components';
import photo from '../../assets/images/photo.jpeg'

export const Container = styled.div`
  height: 90px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

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

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.span`
  font-size: 27px;
  font-weight: 500;
  letter-spacing: 2.3px;
  text-align: center;
  color: #000000
`;

export const UserImage = styled.div`
  background-image: url(${photo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;  
  width: 62px;
  height: 62px;
  border-radius: 31px;
  background-color: black;
  margin-left: 25px;
`;




export const SearchBox = styled.input`
  transition: width 0.6s, border-radius 0.6s, background 0.6s, box-shadow 0.6s;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background: #bbbbbb;
  color: white;
  font-size: 20px;
  :hover {
    color: white;
    background: #c8c8c8;
    box-shadow: 0 0 0 5px #3d4752;
  };
  :hover + label {
    color: white;
  };  
  :focus {
    transition: width 0.6s cubic-bezier(0, 1.22, 0.66, 1.39), border-radius 0.6s, background 0.6s;
    border: none;
    outline: none;
    box-shadow: none;
    padding-left: 15px;
    cursor: text;
    width: 300px;
    border-radius: auto;
    background: #bbbbbb;
    color: black;
  };  
  :focus + label {
    color: black;
  };
  :not(:focus) {
    text-indent: -5000px;
  }  
`;

export const SearchBoxLabel = styled.label`
  position: relative;
  left: -42px;
  top: 10px;  
  color: black;
  cursor: pointer;
  font-size: 2em;
`;
