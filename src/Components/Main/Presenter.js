import React from 'react';
import Header from './../Header/Container';
import Artist from './../Artist/Container';
import { Content, TopContent, Artists, FilterContainer, FilterTitle, FilterValue, FilterDivider, BallContainer, Ball, Arrow } from './styles';

const Presenter = (props) => (
  <div>
    <Header/>
    <Content>      
      <TopContent>
        <FilterContainer>
          <FilterTitle>Where</FilterTitle>
          <FilterValue>All</FilterValue>
          <Arrow className="icon-down-arrow"/>
          <FilterDivider/>
        </FilterContainer>
          <FilterContainer>
          <FilterTitle>When</FilterTitle>
          <FilterValue>All</FilterValue>
          <Arrow className="icon-down-arrow"/>
          <FilterDivider/>
        </FilterContainer>
        <FilterContainer>
          <FilterTitle>Genre</FilterTitle>
          <FilterValue>All</FilterValue>
          <Arrow className="icon-down-arrow"/>
          <FilterDivider/>
        </FilterContainer>
      </TopContent>
      {props.loading &&
        <BallContainer><Ball /></BallContainer>
      }
      {!props.loading &&
        <Artists> 
          <Artist
            title="CUT/COPY"
            photo="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1950&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
            date="11/03/2017"
            place="Rosemont Theatre"
            color="#07985a"
          />
          <Artist
            title="Disclosure"
            photo="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1950&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
            date="11/03/2017"
            place="Rosemont Theatre"
            color="#6d00ff"
          />
          <Artist
            title="Kamla"
            photo="https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=1960&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
            date="11/03/2017"
            place="Rosemont Theatre"
            color="#ff1cae"
          />
          <Artist
            title="Colton"
            photo="https://images.unsplash.com/photo-1490051455276-8d304b1cf72b?w=1950&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
            date="11/03/2017"
            place="Rosemont Theatre"
            color="#55a2de"
          />
        </Artists> 
      }
    </Content>
  </div>
);

export default Presenter;