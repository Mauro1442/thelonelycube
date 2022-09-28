import React from "react";
import styled from "styled-components";

export default function HeroBackground() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 1300px;
  background: linear-gradient(180deg, #ffaebc 6.33%, #a0e7e5 39.13%);
  text-align: center;
  overflow: hidden;
`;
