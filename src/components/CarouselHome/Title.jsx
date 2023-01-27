import styled from "styled-components";

const Title = ({ title }) => {
  const Title = styled.h1`
    font-size: 50px;
    color: rgb(88, 35, 232);
    gap: 8px;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return <Title>{title}</Title>;
};

export default Title;
