import styled from "styled-components";
import Carousel from "../CarouselHome/Carousel";
import Title from "../CarouselHome/Title";
import Hero from "../CarouselHome/Hero";

const Home = () => {
  const Container = styled.div`
    width: 100%;

    background-color: whitesmoke;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    gap: 50px;
  `;
  return (
    <Container>
      <Title title="ESA SNRKS" />
      <Hero />
      <Carousel />
    </Container>
  );
};

export default Home;
