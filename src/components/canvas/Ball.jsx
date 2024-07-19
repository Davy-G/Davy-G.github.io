import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {Decal, Float, OrbitControls, Preload, useTexture} from "@react-three/drei";
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={0.1} floatIntensity={2}>
      <ambientLight intensity={1}></ambientLight>
      <directionalLight position={[0,0,0.05]}/>
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial color="#1a3b70"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading></meshStandardMaterial>
        <Decal position={[0,0,1]} rotation={[2 * Math.PI,0,6.25]} map={decal}></Decal>
      </mesh>
    </Float>
  )
}
const BallCanvas = ({icon}) => {
  return (
      <Canvas
          frameloop="demand"
          gl={{preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls
              enableZoom={false}
          />
          <Ball imgUrl={icon}></Ball>
        </Suspense>
        <Preload all/>
      </Canvas>
  )
}
export default BallCanvas