import React from 'react';
import styled from "styled-components";
import hero from '../images/hero.jpg';


const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  padding: 20px;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;


const HeroTitle = styled.h1`
  width: 60%;
  font-size: 60px;
  color: #fff;
  text-align: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const HeroDescription = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  color: #fff;
  text-align: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 150px;
  border: 2px solid white;
  padding: 15px 15px;
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


const Hero = () => {
  return (
    <Container>
        <HeroContent>
            <HeroTitle>Adventure Awaits</HeroTitle>
            <HeroDescription>Curated travel experiences to stretch, grow and enrich your life</HeroDescription>
            <Button>Discover</Button>
        </HeroContent>
        
    </Container>
  )
}

export default Hero;