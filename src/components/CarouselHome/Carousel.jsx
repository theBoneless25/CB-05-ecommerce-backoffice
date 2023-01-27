import styled from "styled-components";

const Carousel = () => {
  const Carousel = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    flex-direction: row;
  `;
  const Image = styled.img`
    border: 1px solid blue;
    border-radius: 5%;
    box-shadow: 0 2px 4px blue;
    cursor: pointer;
  `;

  const NameImage = styled.h2`
    font-size: 25px;
  `;
  const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin: 20px;
  `;

  return (
    <Carousel>
      <ContainerImg>
        <Image
          src="https://images.stockx.com/images/Nike-Dunk-Low-UNC-2021-Product.jpg?fit=fill&bg=FFFFFF&w=100&h=100&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1624468252"
          alt="logo"
        />
        <NameImage>DUNK</NameImage>
      </ContainerImg>
      <ContainerImg>
        {" "}
        <Image
          src="https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-4-military-black-1_250x.png?v=1652363014"
          alt="logo"
        />
        <NameImage>JORDAN 4</NameImage>
      </ContainerImg>
      <ContainerImg>
        <Image
          src="https://static.nike.com/a/images/w_250,c_limit/5359f1a2-d415-43ac-80d8-0a285023bd17/image.jpg"
          alt="logo"
        />
        <NameImage>JORDAN 1</NameImage>
      </ContainerImg>
    </Carousel>
  );
};

export default Carousel;
