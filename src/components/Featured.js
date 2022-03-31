import React from 'react';
import styled from "styled-components";
import CarousalC from './CarousalC';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  height: 100%;

`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Title = styled.span`
  font-size: 70px;
  text-align: center;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
  text-align: justify;
`;

const Button = styled.button`
  width: 150px;
  border: 2px solid white;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  margin: 20px auto;

  &:hover{
    background-color: white;
    color: crimson;
  }
`;


const Featured = () => {

  return (
    <Container>
 

      <Content>
        <Title>
          featured trip:
          <br />
          <b>South Africa</b> 
        </Title>
        <Button>Sign Up</Button>
        <SubTitle>Spend 14 days fully immersing yourself in South African Culture.</SubTitle>
        <Desc>
        You will spend time exploring Johannesburg and Cape Town.<br/> We offer the unique blend of both major attractions and off the beaten path experiences to ensure you a well-rounded experience in the city.
        </Desc>
     
        <Desc>
          Johannesburg is South Africa’s largest city and is also known as the City of Gold.This is a melting pot of many cultures and has plenty enriching and educational activities to explore. Here we spend some time in Soweto, and visit the house that Nelson Mandela once called home. 

        </Desc>
        <Desc>
        Cape Town, also known as the "Mother City", is considered to be one of the most beautiful cities in the world. It is South Africa's legislative capital and home to the infamous Table Mountain. It offers a wide array of outdoor activities that you will get to enjoy. 

        </Desc>
       
      </Content>

      <CarousalC  />
  
  </Container>
  )
}

export default Featured;