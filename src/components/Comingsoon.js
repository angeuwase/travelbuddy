import React from 'react';
import styled from 'styled-components';
import TourCard from "./TourCard";
import ghana from '../images/ghana.jpg';
import barbados from '../images/barbados.jpg';
import thailand from '../images/thailand.jpg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  height: 100%;
  margin-bottom: 30px;

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
  @media only screen and (max-width: 960px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
  text-align: center;
  margin-bottom: 10px;

`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }


`

const Comingsoon = () => {

  return (
    <Container>
      <Content>
        <Title>upcoming trips:</Title>
        <SubTitle>These are the trips that we currently have in the pipeline.</SubTitle>
      </Content>
      <CardWrapper>
        <TourCard country='Ghana' dates={['30 May 2022', '30 July 2022', '30 September 2022']} src={ghana} />
        <TourCard country='Barbados' dates={['6 May 2022', '20 July 2022', '15 September 2022']} src={barbados}  />
        <TourCard country='Thailand' dates={['20 May 2022 ', '30 July 2022', '30 September 2022']} src={thailand} />

      </CardWrapper>

    </Container>
  )
}

export default Comingsoon;