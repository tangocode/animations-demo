import React from 'react';
import { Container, Title, TitleBold, User, UserName, UserImage, SearchBox, SearchBoxLabel } from './styles';

const Presenter = (props) => (
  <Container>    
    <div><SearchBox/><SearchBoxLabel className="icon-looking-glass"/></div>
    <Title>THE <TitleBold>MUSIC</TitleBold> SPOT</Title>
    <User>
      <UserName>Hey, Mike</UserName>
      <UserImage/>
    </User>
  </Container>
);

export default Presenter;