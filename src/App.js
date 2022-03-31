
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Comingsoon from './components/Comingsoon';
import Footer from './components/Footer';
import GlobalStyle from './globalStyle';

const Container = styled.div`
  height: 100vh;
  overflow: auto;
  position: relative;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <Featured />
      <Comingsoon />
      <Footer />



    </>

  );
}

export default App;
