import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stars, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("earth.glb");
  const saturn = useGLTF("saturnplanet_free.glb");
 

  return (
    <mesh>
      <hemisphereLight intensity={0.10} groundColor='black' />
      <spotLight
        position={[-10, 30, 5]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <Stars
      
        radius={300}  // Radius of the starry background
        depth={60}    // Depth of the stars
        count={30000}  // Number of stars
        factor={4}    // Density factor
        saturation={0}  // Saturation of the stars
        
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
      scale={isMobile ? 0.6 : 0.7}
      position={isMobile ? [0, -4.5, -2.2] : [4, 3.5, -1.5]}
      rotation={[-0.01, 0.2, -0.1]}
      />
       {saturn && (
        <mesh position={[7, -2.5, -6.5]} rotation={[0, 0, 0]}>
          <primitive object={saturn.scene} />
        </mesh>
      )}

    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

 

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 740px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      // frameloop='demand'
      // shadows
      // dpr={[1, 2]}
      // camera={{ position: [-10, 30, 5], fov: 30 }}
      // gl={{ preserveDrawingBuffer: true }}
    >
      
   
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
                    autoRotate
  maxPolarAngle={Math.PI / 2} // Limit vertical rotation (no upside down)
  minPolarAngle={Math.PI / 6}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;