import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stars, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.glb");

  return (
    <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (

    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 30,
        near: 0.1,
        far: 200,
          position: [10, 5, 10],
      }}
    >

         <spotLight
        position={[10, 5, 10]}
        // angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={30000}
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF("./planet/dragon_claw_stand.glb");

//   return (
//     <primitive object={earth.scene} scale={5} position-y={0} rotation-y={0} />
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <div style={{ width: "100vw", height: "100vh", zIndex: "0" }}>
//       <Canvas
//         shadows
//         frameloop='demand'
//         dpr={[1, 2]}
//         gl={{ preserveDrawingBuffer: true }}
//         camera={{
//           fov: 60,
//           near: 0.1,
//           far: 500,
//           position: [0, 5, 10],
//         }}
//       >
//         <spotLight
//           position={[5, 10, 5]}
//           angle={0.3}
//           penumbra={1}
//           intensity={2}
//           castShadow
//           shadow-mapSize={2048}
//         />
//         <ambientLight intensity={0.5} />
//         <Suspense fallback={<CanvasLoader />}>
//           <OrbitControls
//             autoRotate
//             enableZoom={true}
//             maxPolarAngle={Math.PI}
//             minPolarAngle={0}
//           />
//           <Earth />
//           <Preload all />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default EarthCanvas;
