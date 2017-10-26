import React from 'react';
import { Container, Title, Detail, DateText, Place, Tickets, TicketsText, HeartSymbol, Heart, HeartSVG, Layer, LayerSVG, HackyBox, AnimatedPath, Arrow } from './styles';

const Presenter = (props) => (
  <Container photo={props.photo}>
    <Title>{props.title}</Title>
    <Detail className="detail">
      <DateText>{props.date}</DateText>
      <Place>{props.place}</Place>
      <Tickets>
        <TicketsText color={props.color}>FIND TICKETS</TicketsText>
        <Arrow color={props.color} className="icon-ticket-arrow" />
      </Tickets>

      <HeartSymbol className="heartSymbol stroke">
        <HackyBox type="checkbox" className="hackyBox" />
        <Heart className="heart">
          <HeartSVG version="1.1" id="heartSymbol" xmlns="http://www.w3.org/2000/svg" id="heart" viewBox="0 0 50 50">
              <path stroke-width="4" stroke="#ddd" style={{fill: 'currentColor'}} d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
            c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
            c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
          </HeartSVG> 
        </Heart>
        <Layer className="layer">
          <LayerSVG version="1.1" id="heartSymbol" xmlns="http://www.w3.org/2000/svg" id="heart" viewBox="0 0 50 50">
              <AnimatedPath className="animatedPath" stroke="#ff0d0d" stroke-width="4" style={{fill: 'currentColor'}} d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
            c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
            c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
          </LayerSVG> 
        </Layer>
      </HeartSymbol> 

    </Detail>
  </Container>
);

export default Presenter;