import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 960px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 50px;
  font-style: italic;
  color: #777;
  @media only screen and (max-width: 960px) {
    font-size: 30px;
  }
`;

const Image = styled.img`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 20px;


`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0;
  @media only screen and (max-width: 960px) {
    margin: 10px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: crimson;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  
  @media only screen and (max-width: 960px) {
    font-size: 12px;
    padding: 5px;
  }

  &:hover{
    background-color: white;
    color: crimson;
  }
`;



const TourCard = ({ country, dates, src }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{country}</Title>
      </TitleContainer>
      <Image src={src} />
      <List>
          {dates.map(date => <ListItem>{date}</ListItem>)}
      </List>
      <Button>Join Waiting List</Button>
    </Container>
  );
};

export default TourCard;