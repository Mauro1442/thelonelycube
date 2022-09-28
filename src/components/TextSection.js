import styled from "styled-components";

export default function TextSection() {

  return (
    <Wrapper>
      <Title>The Lonely Cube</Title>
      <Description>
        Bring me to life with a click
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 80px 20px 80px;
`;

const Title = styled.h1`
 font-family: Arial, Helvetica, sans-serif;
  color: gray;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;

const Description = styled.p`
 font-family: Arial, Helvetica, sans-serif;

  max-width: 240px;
  color: gray;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;
