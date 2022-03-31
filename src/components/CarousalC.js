import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonBack,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import knp from '../images/knp.jpg';
import tablem from '../images/tablem.jpg';
import soweto from '../images/soweto.jpg';
import capepoint from '../images/capepoint.jpg';




const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 640px;
  height: 400px;
  background: white;
  background-color: crimson;
  font-weight: bold;
  margin: 30px auto;




  @media screen and (max-width: 640px) {
    width: 400px;
    height: 267px;
    font-size: 0.9rem;
    
  }




`;

const Image = styled.div`
  width: 640px;
  height: 360px;
  background: url(${(p) => p.image});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;



  @media screen and (max-width: 640px) {
    width: 400px;
    height: 267px;
   
    
  }

`;

const Nav = styled.nav`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
padding: 10px;
text-align: center;
color: white;
  
`

const sharedStyles = css`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${rgba("#1a132b", 0.5)};
  color: white;
  border: 0;
  font-size: 40px;
  outline: none;
  transition: opacity 0.35s;
  &:disabled {
    opacity: 0;
  }
`;
const NextButton = styled(ButtonNext)`
  ${sharedStyles};
`;
const BackButton = styled(ButtonBack)`
  ${sharedStyles};
`;

const slides = [{
  src: knp,
  text: 'See the Big Five in their natural habitat on a classic safari experience, complete with open 4x4s and safari guides'
},
{
  src: tablem,
  text: 'Hike up to the top of Table Mountain, and have lunch on the most iconic landmark of South Africa, which is one of the New Seven Wonders of the world.'
},
{
  src: soweto,
  text: "Take a bike tour through the city of Soweto, and visit Nelson Mandela's former house"
},
{
  src: capepoint,
  text: 'Visit the most southern tip of Africa, where the Indian and Atlantic oceans meet'
}

];



const CarouselC = ({handleClick, transValue}) => {



  return (
    <Wrapper >
      <CarouselProvider
          naturalSlideWidth={640}
          naturalSlideHeight={360}
          totalSlides={slides.length}
          visibleSlides={1}
        >
          <Slider>
            {slides.map((slide, index) => (
              <Slide index={index}>
                <Text>{slide.text}</Text>
                <Image image={slide.src} />
                
              </Slide>
            ))}
          </Slider>
          <Nav>
            <BackButton>{`<`}</BackButton>
            <NextButton>{`>`}</NextButton>
          </Nav>
      </CarouselProvider>
  

    </Wrapper>
  );
};

export default CarouselC;