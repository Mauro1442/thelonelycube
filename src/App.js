import styled from "styled-components";
import Background from "./components/Background";
import TextSection from "./components/TextSection";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import Plane from "./components/Plane";
import { Physics } from "@react-three/cannon";
import Text from "./components/Text";

function App(props) {
  const { grav } = props;

  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
      <Canvas className="canvas">
        <OrbitControls />
        <Stars />
        <ambientLight intensity={1} />
        <spotLight position={[10, 15, 10]} angle={0.3} intensity={0.5} />
        <Physics>
          <Box grav={grav} />
          <Plane />
        </Physics>
      </Canvas>
      <Text />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
    background: gray;
  }
`;

export default App;
