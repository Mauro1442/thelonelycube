import { useBox } from "@react-three/cannon";

export default function Box() {



  const [ref, api] = useBox(() => ({ mass: 0.00000000001, position: [0, 0, 0], rotation: [-Math.PI / 1.2, 2.5, 2.4],
}));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 5, 0);
      }}

      ref={ref}
      position={[0, 0, 0]
      }
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
