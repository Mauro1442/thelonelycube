import styled from "styled-components";

export default function Text() {

  return (
    <Wrapper>
      <Description>
        This project was made just to play with 3D objects in React, using React-Three-Fiber and Drei
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
