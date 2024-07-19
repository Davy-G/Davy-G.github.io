import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Terminal = () => {
  const Terminal = useGLTF("./terminal/scene.gltf");

  return (
      <mesh>
          <hemisphereLight intensity={1} groundColor="black"/>
          <pointLight intensity={3}/>
          <spotLight position={[-20, 50, 10]}
                     angle={1}
                     penumbra={1}
                     intensity={5}
          />
          <primitive object={Terminal.scene} scale={2} position-y={0} rotation-y={-550}/>
      </mesh>

  )
      ;
};

const TerminalCanvas = () => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{preserveDrawingBuffer: true}}
            camera={{near: 0.1,
            fov: 50,
            far: 200,
            position: [2, 2, 6],}}
        >
            <Suspense fallback={<CanvasLoader/>}>
              {/*  <OrbitControls*/}
              {/*      enableZoom={false}*/}
              {/*maxPolarAngle={Math.PI / 2}*/}
              {/*minPolarAngle={Math.PI / 2}*/}
          {/*/>*/}
          <Terminal />

          <Preload all />
        </Suspense>
      </Canvas>
  );
};

export default TerminalCanvas;